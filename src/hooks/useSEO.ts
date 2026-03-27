import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  type?: string;
  siteName?: string;
}

export function useSEO({
  title,
  description,
  image,
  url = window.location.href,
  type = "article",
  siteName = "VizSchool",
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description, false);

    // Open Graph / Facebook
    setMetaTag("og:type", type);
    setMetaTag("og:url", url);
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:image", image);
    setMetaTag("og:site_name", siteName);

    // Twitter Card
    setMetaTag("twitter:card", "summary_large_image", false);
    setMetaTag("twitter:url", url, false);
    setMetaTag("twitter:title", title, false);
    setMetaTag("twitter:description", description, false);
    setMetaTag("twitter:image", image, false);

    // Cleanup function (optional - removes tags when component unmounts)
    return () => {
      // You can choose to keep meta tags or remove them on unmount
      // For blog posts, it's usually fine to keep them
    };
  }, [title, description, image, url, type, siteName]);
}