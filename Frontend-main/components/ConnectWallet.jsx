import React, { useEffect, useState } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import { LuWallet } from "react-icons/lu";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

function authenticate() {
  showConnect({
    appDetails: {
      name: "Stacks Next.js Starter",
      icon: window.location.origin + "/logo512.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && userSession.isUserSignedIn()) {
    return (
      <div className="md:flex md:items-center md:w-full">
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <span className="text-gray-100 md:inline-block md:pr-8">
          <div className="md:hidden flex items-center">
        </div>
            <span className="text-yellow-100 font-semibold">Mainnet:</span>{" "}
            {userSession.loadUserData().profile.stxAddress.mainnet}
          </span>
          <span className="text-gray-100 md:inline-block">
            <span className="text-yellow-100 font-semibold">Testnet:</span>{" "}
            {userSession.loadUserData().profile.stxAddress.testnet}
          </span>
        </div>
        <div className="md:w-1/2 pr-2 text-center md:text-right md:mt-2 md:mt-0">
          <button className="Connect" onClick={disconnect}>
            Disconnect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <button className="Connect" onClick={authenticate}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
