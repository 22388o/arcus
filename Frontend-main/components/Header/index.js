import React from "react";
import Image from "next/image";
import { useConnect } from "@stacks/connect-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { useRouter } from "next/router";
import { userSession } from "../../utils/stacks";
import useHiro from "../../hooks/useHiro";
import ConnectWallet from "@/components/ConnectWallet";
import Arcus from "../../public/Arcus_logo_v2.png";

export default function Header() {
  const { isSignedIn, userData, doOpenAuth } = useConnect();
  const router = useRouter();
  const address = useHiro();

  const imageClickHandle = () => {
    router.push("../");
  };

  return (
    <div className="p-[12px] w-full bg-black">
      <div className="flex justify-between items-center h-[80px] mx-3">
        {/* <div className="flex pl-2">
          <Image
            src="/Arcus_Logo_v2.png"
            width={150}
            height={50}
            
            alt="Arcus Logo" // Add a descriptive alt text here
            onClick={imageClickHandle}
            className="hover:cursor-pointer"
          />
        </div> */}
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
