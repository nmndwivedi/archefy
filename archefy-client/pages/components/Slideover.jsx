/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Menu } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//Login Details, Logout Button, Address, Order History Button, Investment History Button || Login with...
export default function Slideover({ open, setOpen }) {
  return (
    <Dialog
      as="div"
      className="fixed inset-0 overflow-hidden"
      onClose={setOpen}
      open={open}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Dialog.Overlay className="absolute inset-0 bg-black opacity-75" />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-start justify-between ">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    My Information
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Main */}
              <div className="pb-1 sm:pb-6">
                <div>
                  <div className="mt-6 px-4 sm:mt-0 sm:flex sm:items-end sm:px-6">
                    <div className="sm:flex-1">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Ashley Porter
                          </h3>
                          <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                            <span className="sr-only">Online</span>
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          ashleyporter@gmail.com
                        </p>
                      </div>
                      <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                        <button
                          type="button"
                          className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                        >
                          My Orders
                        </button>
                        <button
                          type="button"
                          className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          My Investments
                        </button>
                        {/* <span className="ml-3 inline-flex sm:ml-0">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <span className="sr-only">Open options menu</span>
                              <DotsVerticalIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      View profile
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Copy profile link
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Menu>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 flex justify-start items-center space-x-2">
                      <span>Delivery Address:</span>
                      <PencilIcon className="w-5 h-5 cursor-pointer" />
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      <p>72/1 Westerpark</p>
                      <p>Amsterdam</p>
                      <p>1051RA</p>
                      <p>The Netherlands</p>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                      Website
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      ashleyporter.com
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                      Birthday
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      <time dateTime="1988-06-23"> June 23, 1988 </time>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
