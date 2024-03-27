import * as React from "react";
import Layout from "../components/layout";
import { Translate } from "gatsby-plugin-translate";

export default function ContactPage() {
  return (
    <Layout currentPage="contact">
      <div className="bg-brand-dark-900 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center mb-12">
            <h1 className="text-4xl uppercase font-thin tracking-tight text-brand-light-300 sm:text-6xl">
              Atelier <span className="font-bold">F2G</span> Arch
            </h1>
          </div>

          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-light-300">
                  <Translate id="contact.our_atelier_address" />
                </h2>
                <p className="mt-4 leading-7 text-brand-light-300">
                  <Translate id="contact.visit_us_at" />:
                </p>
                <a
                  className="font-semibold text-brand-light-300 hover:text-brand-light-50"
                  href="https://maps.app.goo.gl/3vDDUKAGLPBcmyrx9"
                >
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6">
                    <p>Rua Monte dos Burgos, 796 R/C</p>
                    <p>4250-313 Porto</p>
                    <p>Portugal</p>
                  </address>
                </a>
              </div>

              <div className="sm:grid-cols-2 lg:col-span-2 bg-gray-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.0734949033226!2d-8.630700523862844!3d41.176564171327485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465b83e0c5299%3A0xc8a28b86614a849c!2sR.%20do%20Monte%20dos%20Burgos%20796%2C%204250-392%20Porto!5e0!3m2!1sen!2spt!4v1708265689943!5m2!1sen!2spt"
                  width="100%"
                  height="400"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Atelier Address - Google Maps"
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-light-300">
                  <Translate id="contact.contacts" />
                </h2>
                <p className="mt-4 leading-7 text-brand-light-300">
                  <Translate id="contact.send_us_a_message" />
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="bg-gray-50 p-10">
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <Translate id="contact.email" />
                    </dt>
                    <dd>
                      <a
                        className="font-semibold text-slate-600 hover:text-slate-500"
                        href="mailto:geral@atelier-f2g-arch.pt"
                      >
                        geral@atelier-f2g-arch.pt
                      </a>
                    </dd>
                  </dl>
                </div>
                <div className="bg-gray-50 p-10">
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <Translate id="contact.telephone" />
                    </dt>
                    <dd>
                      <a
                        className="font-semibold text-slate-600 hover:text-slate-500"
                        href="tel:00351966324257"
                      >
                        (+351) 966 324 257
                      </a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  return (
    <title>
      {pageContext.language === "pt"
        ? "Contactos | Atelier F2G Arch"
        : "Contact Us | Atelier F2G Arch"}
    </title>
  );
};
