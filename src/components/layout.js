import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  LanguageSelector,
  Translate,
  TranslateLink,
  useTranslateContext,
} from "gatsby-plugin-translate";

const projects = [
  {
    page: "project_01",
    name: "layout.project_01_name",
    to: "/project/01",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [];

const Layout = ({ children, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useTranslateContext();

  return (
    <div class="bg-brand-dark-900">
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <TranslateLink
              to="/"
              className={`-m-1.5 p-1.5 ${
                currentPage === "index"
                  ? "text-brand-light-100"
                  : "text-brand-light-300"
              } hover:text-brand-light-50`}
            >
              <span className="sr-only">Atelier F2G Arch</span>
              <svg className="h-8 w-auto" viewBox="0 0 122.88 54.677318">
                <path
                  fill="currentColor"
                  d="M 0,0.27731884 V 54.677318 H 7.680001 V 32.59732 h 26.56 v -6.720001 h -26.56 V 6.6773188 h 29.12 c 5.022695,0 10.380244,-0.526045 15.36,0.135801 6.678848,0.887666 12.23961,5.3298442 9.64296,12.6641992 -1.381895,3.903213 -4.55296,6.75 -7.40296,9.6 l -12.48,12.480001 c -2.194726,2.194726 -6.400415,5.053158 -7.486914,7.999998 -0.547266,1.48431 -0.193086,3.55447 -0.193086,5.12 H 96.96 c 7.51361,0 19.81183,-0.0301 25.08692,-6.61407 1.07386,-1.34032 0.51308,-4.242139 0.51308,-5.865928 V 27.157319 H 115.2 V 39.31732 c 0,1.435332 0.44727,3.802695 -0.51308,4.995058 -2.01629,2.50344 -7.3769,3.31027 -10.36692,3.3247 C 95.16114,47.681278 86.23539,43.780308 82.90889,34.51732 78.34434,21.80686 87.09032,8.3474168 100.48,7.0516448 c 6.65336,-0.643867 12.61929,1.715655 17.6,6.0256742 h 0.32 l 4.48,-4.4800002 v -0.32 c -11.08025,-11.0729 -31.58176,-10.910205 -42.18444,0.96 -4.27873,4.7902352 -6.173361,10.6632032 -6.497287,16.9600002 -0.180371,3.50626 0.198653,6.908213 1.322957,10.240001 1.5688,4.649013 4.24284,8.084062 7.67877,11.519998 H 45.440001 c 6.324873,-8.978905 18.35084,-14.738875 22.899503,-24.959999 4.26334,-9.57999 0.167002,-19.8161722 -10.419503,-22.18715816 -6.379336,-1.42874 -13.646802,-0.532842 -20.16,-0.532842 H 0"
                />
              </svg>
            </TranslateLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-light-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">
                <Translate id="layout.open_main_menu" />
              </span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-10">
            <Popover className="relative">
              <Popover.Button
                className={`inline-flex items-center gap-x-1 text-sm font-semibold leading-6 ${
                  currentPage.startsWith("project_")
                    ? "text-brand-light-100"
                    : "text-brand-light-300"
                } hover:text-brand-light-50 p-2`}
              >
                <span>
                  <Translate id="layout.projects" />
                </span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                  <div className="w-56 shrink rounded-xl bg-brand-dark-600 p-4 text-sm font-semibold leading-6 shadow-lg ring-1 ring-gray-900/5">
                    {projects.map((item) => (
                      <TranslateLink
                        key={item.name}
                        to={item.to}
                        className={`block p-2 ${
                          currentPage === item.page
                            ? "text-brand-light-100"
                            : "text-brand-light-300"
                        } hover:text-brand-light-50`}
                      >
                        <Translate id={item.name} />
                      </TranslateLink>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <TranslateLink
              to="/contact"
              className={`text-sm font-semibold leading-6 ${
                currentPage === "contact"
                  ? "text-brand-light-100"
                  : "text-brand-light-300"
              } hover:text-brand-light-50 p-2`}
            >
              <Translate id="layout.contact_us" />
            </TranslateLink>
            {language === "pt" ? (
              <LanguageSelector
                className="text-sm font-semibold leading-6 text-brand-light-300 hover:text-brand-light-50 p-2"
                language="en"
              >
                EN 🇬🇧
              </LanguageSelector>
            ) : (
              <LanguageSelector
                className="text-sm font-semibold leading-6 text-brand-light-300 hover:text-brand-light-50 p-2"
                language="pt"
              >
                PT 🇵🇹
              </LanguageSelector>
            )}
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-brand-dark-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <TranslateLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Atelier F2G Arch</span>
                <svg
                  className="h-8 w-auto text-brand-light-100"
                  viewBox="0 0 122.88 54.677318"
                >
                  <path
                    fill="currentColor"
                    d="M 0,0.27731884 V 54.677318 H 7.680001 V 32.59732 h 26.56 v -6.720001 h -26.56 V 6.6773188 h 29.12 c 5.022695,0 10.380244,-0.526045 15.36,0.135801 6.678848,0.887666 12.23961,5.3298442 9.64296,12.6641992 -1.381895,3.903213 -4.55296,6.75 -7.40296,9.6 l -12.48,12.480001 c -2.194726,2.194726 -6.400415,5.053158 -7.486914,7.999998 -0.547266,1.48431 -0.193086,3.55447 -0.193086,5.12 H 96.96 c 7.51361,0 19.81183,-0.0301 25.08692,-6.61407 1.07386,-1.34032 0.51308,-4.242139 0.51308,-5.865928 V 27.157319 H 115.2 V 39.31732 c 0,1.435332 0.44727,3.802695 -0.51308,4.995058 -2.01629,2.50344 -7.3769,3.31027 -10.36692,3.3247 C 95.16114,47.681278 86.23539,43.780308 82.90889,34.51732 78.34434,21.80686 87.09032,8.3474168 100.48,7.0516448 c 6.65336,-0.643867 12.61929,1.715655 17.6,6.0256742 h 0.32 l 4.48,-4.4800002 v -0.32 c -11.08025,-11.0729 -31.58176,-10.910205 -42.18444,0.96 -4.27873,4.7902352 -6.173361,10.6632032 -6.497287,16.9600002 -0.180371,3.50626 0.198653,6.908213 1.322957,10.240001 1.5688,4.649013 4.24284,8.084062 7.67877,11.519998 H 45.440001 c 6.324873,-8.978905 18.35084,-14.738875 22.899503,-24.959999 4.26334,-9.57999 0.167002,-19.8161722 -10.419503,-22.18715816 -6.379336,-1.42874 -13.646802,-0.532842 -20.16,-0.532842 H 0"
                  />
                </svg>
              </TranslateLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-brand-light-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">
                  <Translate id="layout.close_menu" />
                </span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-brand-light-100 hover:bg-gray-50 hover:text-brand-dark-500">
                          <Translate id="layout.projects" />
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none",
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {projects.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.to}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-brand-light-100 hover:bg-gray-50 hover:text-brand-dark-500"
                            >
                              <Translate id={item.name} />
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <TranslateLink
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-light-100 hover:bg-gray-50 hover:text-brand-dark-500"
                  >
                    <Translate id="layout.contact_us" />
                  </TranslateLink>
                  {language === "pt" ? (
                    <LanguageSelector
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-light-100 hover:bg-gray-50 hover:text-brand-dark-500"
                      language="en"
                    >
                      EN 🇬🇧
                    </LanguageSelector>
                  ) : (
                    <LanguageSelector
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-light-100 hover:bg-gray-50 hover:text-brand-dark-500"
                      language="pt"
                    >
                      PT 🇵🇹
                    </LanguageSelector>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {children}

      <footer className="bg-brand-dark-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-brand-light-300 hover:text-brand-light-50"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-brand-light-300">
              &copy; {new Date().getFullYear()}{" "}
              <Translate id="layout.copyright_text" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
