import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import {
  Translate,
  TranslateLink,
  useTranslations,
} from "gatsby-plugin-translate";
import Carousel from "../components/carousel";

const IndexPage = () => {
  const t = useTranslations();

  return (
    <Layout currentPage="index">
      <main className="isolate">
        <div className="relative">
          <div className="py-8">
            <div className="mx-auto text-center">
              <h1 className="text-4xl uppercase font-thin tracking-tight text-brand-light-300 sm:text-6xl">
                Atelier <span className="font-bold">F2G</span> Arch
              </h1>
              <p className="my-6 text-lg leading-8 text-brand-light-300">
                <Translate id="index.slogan" />
              </p>

              <Carousel />

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <TranslateLink
                  to="/project/01"
                  className="text-sm font-semibold leading-6 text-brand-light-300 hover:text-brand-light-50 p-2"
                >
                  <Translate id="index.view_project" />{" "}
                  <span aria-hidden="true">→</span>
                </TranslateLink>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#14b8a6] to-[#14b8a6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y={-1}
              className="overflow-visible fill-brand-dark-600"
            >
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#14b8a6] to-[#14b8a6] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-md lg:shrink-0 xl:max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-brand-light-300 sm:text-5xl">
                    <Translate id="index.crafting_homes_creating_legacies" />
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-brand-light-300 sm:max-w-md lg:max-w-none">
                    <Translate id="index.crafting_homes_creating_legacies_description" />
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-60 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <StaticImage
                        src="../images/01.jpg"
                        alt={t`index.hime_collection`}
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-60 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <StaticImage
                        src="../images/02.jpg"
                        alt={t`index.ronoel_collection`}
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <StaticImage
                        src="../images/03.jpg"
                        alt={t`index.roz_collection`}
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-60 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <StaticImage
                        src="../images/04.jpg"
                        alt={t`index.alice_collection`}
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <StaticImage
                        src="../images/05.jpg"
                        alt={t`index.hime_collection`}
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-dark-900 py-24 md:py-32 lg:py-40">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-brand-light-300 sm:text-4xl">
                <Translate id="index.unveiling_our_projects" />
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-light-300">
                <Translate id="index.unveiling_our_projects_description" />
              </p>
            </div>
            <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
              <li>
                <StaticImage
                  className="aspect-[3/2] w-full object-cover"
                  src="../images/01.jpg"
                  alt={t`index.project_01_name`}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-brand-light-300">
                  <Translate id="index.project_01_name" />
                </h3>
                <p className="text-base leading-7 text-brand-light-300">
                  <Translate id="index.project_01_description" />
                </p>
                <TranslateLink
                  to="/project/01"
                  className="mt-6 text-brand-light-300 hover:text-brand-light-50"
                >
                  <Translate id="index.view_project" />{" "}
                  <span aria-hidden="true">→</span>
                </TranslateLink>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ pageContext }) => {
  return (
    <title>
      {pageContext.language === "pt"
        ? "A Construir Lares, Deixando Legados | Atelier F2G Arch"
        : "Crafting Homes, Creating Legacies | Atelier F2G Arch"}
    </title>
  );
};
