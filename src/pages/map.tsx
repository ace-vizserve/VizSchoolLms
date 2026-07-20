import { useEffect, useState } from 'react'

// Pin art is a 1920x1080 canvas with the marker centered; its point sits at
// 50.02% / 80.65% of the image box, so that's the anchor we translate onto the
// target coordinate.
const PIN_ANCHOR_X = 50.02
const PIN_ANCHOR_Y = 80.65

// Responsive width of the pin *image*; the visible marker is a fraction of it.
const PIN_W = 'clamp(64px, 8.5%, 150px)'
// Marker art spans x 718..1203 and y 208..871 of a 1920x1080 canvas, so relative
// to the image width the visible marker is 0.253 wide and 0.345 tall. Used to
// size the hit target and to lift the logo card clear of the marker's head.
const MARKER_W = 0.253
const MARKER_H = 0.345

// left/top are % of the map image, derived from World Map.png's own projection
// (x = 5.897*lon + 893.57, y = 617.37 - 6.793*lat, over its 1920x1080 canvas).
// Recalibrate these if the map artwork is swapped again.
//
// anchorX is where along the card's own width the pin sits. UK is centred; the
// two Asian pins sit far enough right that a centred card would run off the
// map, so their cards open leftward instead.
const PINS = [
  {
    code: 'UK',
    label: 'United Kingdom',
    left: 46.5,
    top: 24.77,
    anchorX: 50,
    cols: 1,
    logos: ['University Of London.png'],
  },
  {
    code: 'PH',
    label: 'Philippines',
    left: 83.7,
    top: 47.98,
    anchorX: 80,
    cols: 4,
    logos: [
      'Ateneo.png',
      'UST Angelicum College.png',
      'Assumption Antipolo.png',
      'Domuschola International School.png',
      'San Carlos School of Cebu.png',
      'St. Edward School.png',
      'CSA Makati.png',
      'AFGBMTS.png',
    ],
  },
  {
    code: 'SG',
    label: 'Singapore',
    left: 78.43,
    top: 56.31,
    anchorX: 72,
    cols: 4,
    logos: [
      'Kaplan.png',
      'MDIS.png',
      'NAFA.png',
      'Ngee Ann Polytechnic.png',
      'PSB Academy.png',
      'Republic Polytechnic.png',
      'Singapore Polytechnic.png',
      'Temasek Polytechnic.png',
    ],
  },
]

// Below this width the anchored popover can't fit beside the pin, so the logos
// move into a bottom sheet instead.
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return isMobile
}

const LOGO_W = 124

// `fluid` lets the tiles shrink to share the available width — needed in the
// bottom sheet, where three fixed 124px tiles would overflow a phone screen.
const LogoGrid = ({
  logos,
  cols,
  fluid = false,
}: {
  logos: string[]
  cols: number
  fluid?: boolean
}) => (
  <div
    className="grid justify-items-center gap-x-4 gap-y-3"
    style={{
      gridTemplateColumns: `repeat(${cols}, ${
        fluid ? 'minmax(0, 1fr)' : `${LOGO_W}px`
      })`,
    }}
  >
    {logos.map((logo) => (
      <img
        key={logo}
        src={`/assets/ys-map/LogosYS/${logo}`}
        alt={logo.replace(/\.png$/, '')}
        title={logo.replace(/\.png$/, '')}
        className="h-16 w-full object-contain"
        style={{ maxWidth: LOGO_W }}
      />
    ))}
  </div>
)

const map = () => {
  const [active, setActive] = useState<string | null>(null)
  const isMobile = useIsMobile()
  const activePin = PINS.find((p) => p.code === active)

  return (
    <div className="h-dvh w-full grid place-items-center overflow-hidden">
      {/* Shrink-wraps the map image, so the % pin positions stay locked to the
          landmasses at any viewport size */}
      <div className="relative w-fit">
        <img
          src="/assets/ys-map/World Map.png"
          alt="World map"
          className="block max-h-dvh max-w-full"
        />

        {PINS.map((pin) => {
          const isOpen = active === pin.code
          const show = () => setActive(pin.code)
          const hide = () => setActive(null)

          return (
            <div key={pin.code}>
              <img
                src={`/assets/ys-map/${pin.code}.png`}
                alt=""
                aria-hidden
                className="pointer-events-none absolute drop-shadow-md transition-transform duration-200 ease-out"
                style={{
                  left: `${pin.left}%`,
                  top: `${pin.top}%`,
                  width: PIN_W,
                  // Scale lives inside the transform (not Tailwind's standalone
                  // `scale` property) so it composes after the translate, and the
                  // origin is the marker's tip so it grows without moving.
                  transform: `translate(-${PIN_ANCHOR_X}%, -${PIN_ANCHOR_Y}%) scale(${
                    isOpen ? 1.12 : 1
                  })`,
                  transformOrigin: `${PIN_ANCHOR_X}% ${PIN_ANCHOR_Y}%`,
                  zIndex: isOpen ? 2 : 1,
                }}
              />

              {/* Hit target tracks the drawn marker, not the mostly-transparent
                  PNG canvas — otherwise the SG and PH boxes overlap on small
                  screens and the wrong card opens. */}
              <button
                type="button"
                aria-label={pin.label}
                onMouseEnter={isMobile ? undefined : show}
                onMouseLeave={isMobile ? undefined : hide}
                onFocus={show}
                onBlur={hide}
                onClick={() => setActive(isOpen ? null : pin.code)}
                className="absolute cursor-pointer rounded-full focus:outline-2 focus:outline-offset-2 focus:outline-sky-500"
                style={{
                  left: `${pin.left}%`,
                  top: `${pin.top}%`,
                  width: `max(28px, calc(${MARKER_W} * ${PIN_W}))`,
                  height: `max(28px, calc(${MARKER_H} * ${PIN_W}))`,
                  transform: 'translate(-50%, -100%)',
                  zIndex: isOpen ? 4 : 3,
                }}
              />

              {/* Anchored popover — pointer devices only */}
              {!isMobile && pin.logos.length > 0 && (
                <div
                  onMouseEnter={show}
                  onMouseLeave={hide}
                  className={`absolute rounded-xl border border-black/5 bg-white p-3 shadow-xl transition-all duration-200 ease-out ${
                    isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'pointer-events-none translate-y-1 opacity-0'
                  }`}
                  style={{
                    left: `${pin.left}%`,
                    top: `${pin.top}%`,
                    // Sit the card's bottom on the pin, then lift it clear of
                    // the marker head plus a small gap.
                    transform: `translate(-${pin.anchorX}%, -100%)`,
                    marginTop: `calc(-1 * ${MARKER_H} * ${PIN_W} - 10px)`,
                    zIndex: isOpen ? 3 : 1,
                  }}
                >
                  <p className="mb-2 px-1 text-center text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
                    {pin.label}
                  </p>
                  <LogoGrid logos={pin.logos} cols={pin.cols} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Bottom sheet — touch/narrow screens */}
      {isMobile && (
        <>
          <div
            onClick={() => setActive(null)}
            className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 ${
              activePin ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
          <div
            className={`fixed inset-x-0 bottom-0 z-50 rounded-t-2xl bg-white p-4 pb-6 shadow-2xl transition-transform duration-300 ease-out ${
              activePin ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-neutral-300" />
            <p className="mb-3 text-center text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
              {activePin?.label}
            </p>
            <LogoGrid logos={activePin?.logos ?? []} cols={3} fluid />
          </div>
        </>
      )}
    </div>
  )
}

export default map
