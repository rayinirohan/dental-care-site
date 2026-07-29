import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bahavathi Dental | Dental Clinic in Nizamabad" },
      {
        name: "description",
        content:
          "Bahavathi Dental in Nizamabad offers checkups, cleaning, root canal, implants, braces and whitening with modern equipment and compassionate care.",
      },
      { property: "og:title", content: "Bahavathi Dental | Dental Clinic in Nizamabad" },
      {
        property: "og:description",
        content:
          "Professional dental treatments with modern equipment and compassionate care in Nizamabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The site itself is plain HTML/CSS/JS in /public/site. This route just opens it.
function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Loading Bahavathi Dental…</p>
    </div>
  );
}
