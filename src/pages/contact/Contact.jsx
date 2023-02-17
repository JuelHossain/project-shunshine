/* eslint-disable react/self-closing-comp */

import { useRef, useState } from "react";

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  return (
    <section className="p-6 flex-1 flex items-center justify-center dark:bg-gray-800 dark:text-gray-50">
      <form ref={formRef} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Contact Us</p>
            <p className="text-xs">Please Fill this form to contact us</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                required
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-10 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                required
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-10 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-10 p-2"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Message
              </label>
              <textarea
                required
                id="address"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-20 p-2"
              />
            </div>
            <button
              disabled={sent}
              onClick={() => {
                setSent(true);
                formRef.current.reset();
                setTimeout(() => setSent(false), 5000);
              }}
              type="submit"
              className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
            >
              SEND
            </button>
          </div>
        </fieldset>
        <div className="flex justify-end">
          {sent && (
            <div className="flex  shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-md dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
              <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
                <span className="text-2xl">Success</span>
                <span className="text-xs dark:text-gray-400">Vitae nulla eligendi dignissimos culpa doloribus.</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFreeze(false);
                  setSent(false);
                }}
                className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-400 dark:border-gray-700"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
