import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { Extension, Node } from "@tiptap/core";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo2,
  Redo2,
  Code2,
  Eye,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";

/* ------------------------------------------------------------------ */
/* Branded snippet blocks (match the public blog styling)              */
/* ------------------------------------------------------------------ */

const DROP_CAP_INTRO = `<p class="text-base md:text-lg font-medium text-neutral-700 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">Write your opening paragraph here. The first letter becomes a large coloured drop cap.</p>`;

const PATHWAY_CARD = `<div data-branded-block class="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm my-4"><h3 class="text-xl font-bold text-primary mb-2">Card Title</h3><p class="text-sm text-neutral-700">Card description goes here. Edit this block in Code view to change the text.</p></div>`;

const CTA_BOX = `<div data-branded-block class="bg-primary/5 border border-primary/20 p-6 rounded-xl my-8 text-center"><p class="text-base font-semibold text-primary mb-2">Ready to Get Started?</p><p class="text-sm text-neutral-700 mb-4">For admissions and enquiries, contact our Admissions Team at</p><p class="text-sm text-neutral-700 font-medium"><a href="tel:+6582000062" class="text-primary hover:underline">+65 8200 0062</a> to learn more.</p></div>`;

/* ------------------------------------------------------------------ */
/* Custom extensions                                                   */
/* ------------------------------------------------------------------ */

// Preserve the `class` attribute on paragraphs/headings so styled blocks
// (e.g. the drop-cap intro) survive the visual <-> code round-trip.
const KeepClass = Extension.create({
  name: "keepClass",
  addGlobalAttributes() {
    return [
      {
        types: ["paragraph", "heading"],
        attributes: {
          class: {
            default: null,
            parseHTML: (el) => el.getAttribute("class"),
            renderHTML: (attrs) => (attrs.class ? { class: attrs.class } : {}),
          },
        },
      },
    ];
  },
});

// A whole pre-styled HTML block (cards, CTA) kept as a single unit. It is
// preserved verbatim and re-rendered, but edited via Code view.
const BrandedBlock = Node.create({
  name: "brandedBlock",
  group: "block",
  atom: true,
  selectable: true,
  parseHTML() {
    // Preserve our snippet blocks AND any classed <div> from older posts
    // (cards, CTA, list wrappers) verbatim, instead of letting TipTap flatten
    // and lose them. Such blocks are edited via Code view.
    return [
      { tag: "div[data-branded-block]", priority: 220, getAttrs: (el) => ({ html: (el as HTMLElement).outerHTML }) },
      { tag: "div[class]", priority: 200, getAttrs: (el) => ({ html: (el as HTMLElement).outerHTML }) },
    ];
  },
  addAttributes() {
    return { html: { default: "" } };
  },
  renderHTML({ node }) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = (node.attrs.html as string) || "";
    const el = wrapper.firstElementChild as HTMLElement | null;
    if (!el) {
      const fallback = document.createElement("div");
      fallback.setAttribute("data-branded-block", "");
      return fallback;
    }
    el.setAttribute("data-branded-block", "");
    return el;
  },
});

/* ------------------------------------------------------------------ */
/* Toolbar button                                                      */
/* ------------------------------------------------------------------ */

function ToolBtn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`flex h-8 min-w-8 items-center justify-center rounded px-2 text-sm transition-colors ${
        active ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Editor                                                              */
/* ------------------------------------------------------------------ */

const EDITOR_PROSE =
  "prose prose-lg max-w-none min-h-[400px] px-4 py-3 focus:outline-none " +
  "prose-headings:text-primary prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 " +
  "prose-h3:text-xl prose-h3:font-bold prose-blockquote:border-primary prose-blockquote:italic " +
  "prose-blockquote:font-semibold prose-blockquote:text-neutral-800 prose-p:text-neutral-700 " +
  "prose-p:leading-relaxed prose-img:rounded-xl prose-img:shadow-md";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [mode, setMode] = useState<"visual" | "code">("visual");
  const [code, setCode] = useState(value);
  const isSyncingExternally = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: { openOnClick: false },
      }),
      Image,
      KeepClass,
      BrandedBlock,
    ],
    content: value,
    editorProps: { attributes: { class: EDITOR_PROSE } },
    onUpdate: ({ editor }) => {
      if (isSyncingExternally.current) return;
      onChange(editor.getHTML());
    },
  });

  // Keep the editor in sync when the parent swaps in a different blog's content.
  useEffect(() => {
    if (!editor) return;
    if (mode !== "visual") return;
    if (value === editor.getHTML()) return;
    isSyncingExternally.current = true;
    editor.commands.setContent(value, { emitUpdate: false });
    isSyncingExternally.current = false;
  }, [value, editor, mode]);

  if (!editor) return null;

  const setLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt("Image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const insertSnippet = (html: string) => {
    editor.chain().focus().insertContent(html).run();
  };

  const enterCode = () => {
    setCode(editor.getHTML());
    setMode("code");
  };

  const enterVisual = () => {
    isSyncingExternally.current = true;
    editor.commands.setContent(code, { emitUpdate: false });
    isSyncingExternally.current = false;
    onChange(code);
    setMode("visual");
  };

  return (
    <div className="rounded-lg border border-neutral-300 bg-white">
      {/* Top bar: Visual / Code toggle */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-2 py-1.5">
        <div className="flex items-center gap-1">
          <ToolBtn title="Visual editor" active={mode === "visual"} onClick={enterVisual}>
            <Eye className="mr-1 h-4 w-4" /> Visual
          </ToolBtn>
          <ToolBtn title="HTML code" active={mode === "code"} onClick={enterCode}>
            <Code2 className="mr-1 h-4 w-4" /> Code
          </ToolBtn>
        </div>
      </div>

      {mode === "visual" ? (
        <>
          {/* Formatting toolbar */}
          <div className="flex flex-wrap items-center gap-1 border-b border-neutral-200 p-2">
            <ToolBtn title="Body text" active={editor.isActive("paragraph")} onClick={() => editor.chain().focus().setParagraph().run()}>
              Body
            </ToolBtn>
            <ToolBtn title="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
              H2
            </ToolBtn>
            <ToolBtn title="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
              H3
            </ToolBtn>

            <span className="mx-1 h-5 w-px bg-neutral-200" />

            <ToolBtn title="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
              <Bold className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
              <Italic className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
              <UnderlineIcon className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
              <Strikethrough className="h-4 w-4" />
            </ToolBtn>

            <span className="mx-1 h-5 w-px bg-neutral-200" />

            <ToolBtn title="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
              <List className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
              <ListOrdered className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
              <Quote className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Link" active={editor.isActive("link")} onClick={setLink}>
              <LinkIcon className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Image by URL" onClick={addImage}>
              <ImageIcon className="h-4 w-4" />
            </ToolBtn>

            <span className="mx-1 h-5 w-px bg-neutral-200" />

            <ToolBtn title="Undo" onClick={() => editor.chain().focus().undo().run()}>
              <Undo2 className="h-4 w-4" />
            </ToolBtn>
            <ToolBtn title="Redo" onClick={() => editor.chain().focus().redo().run()}>
              <Redo2 className="h-4 w-4" />
            </ToolBtn>
          </div>

          {/* Branded snippet buttons */}
          <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-2 py-2">
            <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
              <Sparkles className="h-3.5 w-3.5" /> Insert block:
            </span>
            <Button type="button" size="sm" variant="outline" onClick={() => insertSnippet(DROP_CAP_INTRO)}>
              Drop-cap intro
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={() => insertSnippet(PATHWAY_CARD)}>
              Pathway card
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={() => insertSnippet(CTA_BOX)}>
              CTA box
            </Button>
          </div>

          <EditorContent editor={editor} />
        </>
      ) : (
        <div className="p-2">
          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              onChange(e.target.value);
            }}
            rows={22}
            spellCheck={false}
            className="w-full resize-y rounded-md border border-neutral-200 bg-neutral-900 p-4 font-mono text-sm leading-relaxed text-neutral-100 focus:outline-none"
            placeholder="Paste or edit raw HTML here. Switch to Visual to format it."
          />
          <p className="mt-1 text-xs text-gray-500">
            Raw HTML — paste exported/ChatGPT HTML here, or fine-tune the branded blocks. Switch back to Visual to keep editing.
          </p>
        </div>
      )}
    </div>
  );
}

export default RichTextEditor;
