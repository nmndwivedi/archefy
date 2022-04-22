/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Menu } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//Login Details, Logout Button, Address, Order History Button, Investment History Button || Login with...
export default function Slideover({ open, setOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                    {isLoggedIn ? "My Information" : "Please login"}
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-700"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Main */}
              {isLoggedIn && (
                <>
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
                              className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:flex-1"
                            >
                              My Orders
                            </button>
                            <button
                              type="button"
                              className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              My Investments
                            </button>
                            {/* <span className="ml-3 inline-flex sm:ml-0">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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

                      <button
                        type="button"
                        className="inline-flex w-32 flex-shrink-0 items-center justify-center rounded-md border border-transparent  border-red-600 px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:flex-1"
                      >
                        Logout
                      </button>
                    </dl>
                  </div>
                </>
              )}
              {!isLoggedIn && (
                <div className="pb-1 sm:pb-6">
                  <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-start sm:px-6 flex flex-col">
                    <span>Use one of these services</span>
                    <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border border-blue-500 font-medium">
                      <img src="/logos/fb.svg" alt="fb" className="w-8 h-8 m-1" />
                      <p>Facebook</p>
                    </button>
                    <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border border-red-500 font-medium">
                      <img src="/logos/go.svg" alt="go" className="w-10 h-10" />
                      <p>Google</p>
                    </button>
                    <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border border-blue-400 font-medium">
                      <img src="/logos/tw.svg" alt="tw" className="w-6 h-6 m-2" />
                      <p>Twitter</p>
                    </button>
                  </div>
                  <div className="mt-4 px-4 sm:mt-6 sm:flex sm:items-start sm:px-6 flex flex-col">
                    <span>Or, securely login with your crypto wallet</span>
                    <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border border-orange-500 font-medium">
                      <img src="/logos/mm.svg" alt="fb" className="w-6 h-6 m-2" />
                      <p>MetaMask</p>
                    </button>
                    <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border border-blue-600 font-medium">
                      <img src="/logos/wc.svg" alt="go" className="w-6 h-6 m-2" />
                      <p>WalletConnect</p>
                    </button>
                    <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border border-blue-700 font-medium">
                      <img src="/logos/cb.png" alt="tw" className="w-6 h-6 m-2" />
                      <p>Coinbase Wallet</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
