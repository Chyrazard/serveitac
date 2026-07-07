import Link from "next/link";
import { site } from "@/lib/site";

type Section = {
  title: string;
  paragraphs: string[];
};

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">
        Volver a ServeiCat 24H
      </Link>
      <article className="legal-content">
        <p className="eyebrow">Información legal</p>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <section>
          <h2>Contacto</h2>
          <p>
            Para cualquier consulta relacionada con esta página puedes escribir a {site.email} o llamar al{" "}
            {site.phoneDisplay}.
          </p>
        </section>
      </article>
    </main>
  );
}
