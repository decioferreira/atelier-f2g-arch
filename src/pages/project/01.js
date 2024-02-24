import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Translate, useTranslations } from "gatsby-plugin-translate";

export default function FwHimePage() {
  const t = useTranslations();

  return (
    <Layout currentPage="collection_hime">
      <div className="px-6 py-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-light-300 sm:text-6xl">
            <Translate id="projects.project_01" />
          </h2>
          <h3 className="mt-6 text-base font-semibold leading-7 text-brand-light-300">
            <Translate id="projects.project_01_description" />
          </h3>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="columns-2 md:columns-3 gap-4">
          <StaticImage
            className="h-auto max-w-full mb-4"
            src="../../images/01.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/02.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/03.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/04.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4 aspect-[298/447]"
            src="../../images/05.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto max-w-full mb-4"
            src="../../images/06.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/07.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/08.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/09.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto w-full mb-4"
            src="../../images/10.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto max-w-full mb-4"
            src="../../images/11.jpg"
            alt={t`projects.project_01`}
          />
          <StaticImage
            className="h-auto max-w-full mb-4"
            src="../../images/12.jpg"
            alt={t`projects.project_01`}
          />
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  return (
    <title>
      {pageContext.language === "pt"
        ? "Projecto 01 | Amilod Zareg"
        : "Project 01 | Amilod Zareg"}
    </title>
  );
};
