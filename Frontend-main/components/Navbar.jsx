import React from "react";
import { useConnect } from "@stacks/connect-react";
import { useRouter } from "next/router";
import { userSession } from "../utils/stacks";
import ConnectWallet from "@/components/ConnectWallet";

export default function Navbar() {
  const { isSignedIn, userData, doOpenAuth } = useConnect();
  const router = useRouter();

  const imageClickHandle = () => {
    router.push("../");
  };

  return (
    <div className="p-[12px] w-full bg-black">
      <div className="flex justify-between items-center h-[80px] mx-3">
        <div className="hidden md:flex items-center pl-48">
          {!isSignedIn && <ConnectWallet />}
          {isSignedIn && userData && userData.profile?.stxAddress?.testnet && (
            <button
              className="bg-[#42EACA] rounded-[5px] px-4 py-2 h-[40px] flex items-center ml-auto font-exo2"
              onClick={() => userSession.signUserOut()}
            >
              {userData.profile.stxAddress.testnet}
            </button>
          )}
        </div>
      </div>
      {isSignedIn && (
        <div className="md:hidden px-3 pb-2">
          <ConnectWallet />
        </div>
      )}
    </div>
  );
}
