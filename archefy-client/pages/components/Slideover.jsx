/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Menu } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { signInWithGoogle } from "../../firebase";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getImrUrlForConnector(name) {
  if (name === "WalletConnect") return "/logos/wc.svg";
  else if (name === "Coinbase Wallet") return "/logos/cb.png";
  else return "/logos/mm.svg";
}

//Login Details, Logout Button, Address, Order History Button, Investment History Button || Login with...
export default function Slideover({ open, setOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [{ data, error }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

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
                    {isLoggedIn ? "My Information" : "Account"}
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
              {isLoggedIn ? (
                <>
                  <UserProfile />
                </>
              ) : (
                <>
                  <SocialLogin accountData={accountData} />
                </>
              )}
              <div className="">
                <hr className="mt-8" />
                <CryptoLogin
                  data={data}
                  error={error}
                  connect={connect}
                  accountData={accountData}
                  disconnect={disconnect}
                />
              </div>
              <hr className="mt-8" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const UserProfile = () => {
  return (
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
                <p className="text-sm text-gray-500">ashleyporter@gmail.com</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 flex justify-start items-center space-x-2">
              <span>Home Address:</span>
              <PencilIcon className="w-5 h-5 cursor-pointer" />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <p>72/1 Westerpark</p>
              <p>Amsterdam</p>
              <p>1051RA</p>
              <p>The Netherlands</p>
            </dd>
          </div>
          {/*
            <button
              type="button"
              className="inline-flex w-32 flex-shrink-0 items-center justify-center rounded-md border border-transparent  border-red-600 px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:flex-1"
            >
              Logout
            </button> */}
        </dl>
      </div>
    </>
  );
};

const CryptoLogin = ({ data, error, connect, accountData, disconnect }) => {
  return (
    <div className="px-4 sm:mt-6 sm:flex sm:items-start sm:px-6 flex flex-col">
      {!accountData && (
        <>
          <span>Connect your crypto wallet</span>
          <span>(Required if you wish to invest)</span>

          {data.connectors.map((connector) => (
            <button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() =>
                accountData?.connector?.name ? disconnect() : connect(connector)
              }
              className={classNames(
                "mt-2 w-48 rounded-full flex items-center space-x-1 border font-medium",
                accountData?.connector?.name === connector.name
                  ? "bg-green-500 text-white"
                  : ""
              )}
            >
              <img
                src={getImrUrlForConnector(connector.name)}
                alt="fb"
                className="w-6 h-6 m-2"
              />
              {connector.name}
              {!connector.ready && " (unsupported)"}
            </button>
          ))}
        </>
      )}

      {error && (
        <div className="mt-2">{error?.message ?? "Failed to connect"}</div>
      )}

      {accountData && (
        <div className="mt-4">
          {accountData.ens && (
            <img src={accountData.ens?.avatar} alt="ENS Avatar" />
          )}
          <div>
            {accountData.ens?.name
              ? `${accountData.ens?.name} (${accountData.address})`
              : accountData.address}
          </div>
          <div className="italic text-gray-400">
            Connected to {accountData.connector.name}
          </div>
          <button
            onClick={disconnect}
            className="mt-2 w-48 rounded-full flex items-center space-x-1 border font-medium bg-red-500 text-white p-2 px-12"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

const SocialLogin = ({ accountData }) => {
  return (
    <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-start sm:px-6 flex flex-col">
      {!accountData ? (
        <span>Use one of these services to login</span>
      ) : (
        <span>Connect Social Account</span>
      )}
      {/* <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border font-medium">
        <img src="/logos/fb.svg" alt="fb" className="w-8 h-8 m-1" />
        <p>Facebook</p>
      </button> */}
      <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border font-medium" onClick={()=>signInWithGoogle()}>
        <img src="/logos/go.svg" alt="go" className="w-10 h-10" />
        <p>Google</p>
      </button>
      {/* <button className="mt-2 w-48 rounded-full flex items-center space-x-1 border font-medium">
        <img src="/logos/tw.svg" alt="tw" className="w-6 h-6 m-2" />
        <p>Twitter</p>
      </button> */}
    </div>
  );
};
