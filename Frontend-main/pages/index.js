import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignUpModal from "@/components/SignUpModal";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { MdPageview } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState(1);
  return (
    <div className="bg-black w-full h-screen flex flex-col">
      <Header />
      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex flex-col h-full">
        <div className="flex h-full">
          <div className="flex flex-col w-[220px] pt-6 pl-3">
            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./")}
            >
              <AiOutlineHome className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Home
              </span>
            </div>

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./Lendnborrow")}
            >
              <PiVaultLight className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Lend N' Borrow
              </span>
            </div>
            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./Vaults")}
            >
              <PiVaultLight className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Vaults
              </span>
            </div>
            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("http://arcusbtc.com")}
            >
              <FcAbout className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                About
              </span>
            </div>

          </div>
          <div className="w-[2px] h-full bg-[#2C2C2C]"></div>
          {status == 2 && (
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className="flex justify-center items-center">
                <div
                  className="bg-[#1E1E1E] w-[42px] h-[42px] rounded-full flex justify-center items-center hover:cursor-pointer"
                  onClick={() => setStatus(1)}
                >
                  <span className="font-Exo2 text-[20px] text-white">1</span>
                </div>
                <hr className="w-[60px] bg-[#2c1d1d] opacity-20 border-t-2" />
                <div
                  className="bg-[#C8C8C8] w-[42px] h-[42px] rounded-full flex justify-center items-center hover:cursor-pointer"
                  onClick={() => setStatus(2)}
                >
                  <span className="font-Exo2 text-[20px]">2</span>
                </div>
              </div>
              <span className="font-exo2 mt-10 text-white text-[64px] font-bold">
                Welcome to Arcus.
              </span>
              <span className="text-[#C8C8C8] text-[36px] font-bold mt-10">
                Bitcoin DeFi.
              </span>
              <span className="text-[#B4B4B4] text-[28px] mt-3">
                Deposit into our vaults, and Earn rewards in Bitcoin!
              </span>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-between w-full h-full">
                  <span className="text-white text-[24px] font-bold mt-[100px]">
                    Don't Wait!
                  </span>
                  <button className="bg-[#42EACA] mt-5 rounded-[5px] w-[220px] text-center justify-center px-6 py-4 h-[60px] flex items-center ml-auto text-[24px] font-exo2 font-bold">
                    <BiMoney className="mr-2" />
                    Invest Now
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full ml-[100px]">
                  <span className="text-white text-[24px] font-bold mt-[100px]">
                    Yield Vaults
                  </span>
                  <button
                    className="bg-[#42EACA] mt-5 rounded-[5px] w-[220px] text-center justify-center px-6 py-4 h-[60px] flex items-center ml-auto text-[24px] font-exo2 font-bold"
                    onClick={() => router.push("/Vaults")}
                  >
                    <MdPageview className="mr-2" />
                    Explore
                  </button>
                </div>
              </div>
            </div>
          )}
          {status == 1 && (
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className="flex justify-center items-center">
                <div
                  className="bg-[#C8C8C8] w-[42px] h-[42px] rounded-full flex justify-center items-center hover:cursor-pointer"
                  onClick={() => setStatus(1)}
                >
                  <span className="font-Exo2 text-[20px]">1</span>
                </div>
                <hr className="w-[60px] bg-[#2C2C2C] opacity-20 border-t-2" />
                <div
                  className="bg-[#1E1E1E] w-[42px] h-[42px] rounded-full flex justify-center items-center hover:cursor-pointer"
                  onClick={() => setStatus(2)}
                >
                  <span className="font-Exo2 text-[20px] text-white">2</span>
                </div>
              </div>
              <span className="font-exo2 mt-10 text-white text-[64px] font-bold text-center">
                Forge your path to
                <br /> the Citadel
              </span>
              <span className="text-[#B4B4B4] text-[28px] mt-[70px]">
                Get Early Access by signing up below!
              </span>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-between w-full h-full">
                  <button className="bg-[#42EACA] mt-5 rounded-[5px] w-[200px] text-center justify-center px-6 py-4 h-[60px] flex items-center ml-auto text-[24px] font-exo2 font-bold">
                    <FaSignInAlt className="mr-2 font-bold" />
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className="border-t-2 border-[#2C2C2C]" />
        <div className="flex mt-auto">
          <Footer className="h-[80px]" />
        </div>
      </div>
    </div>
  );
}
