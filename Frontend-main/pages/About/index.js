import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import AddToVault from "@/components/AddToVault";

export default function About() {
  const router = useRouter();
  const [status, setStatus] = useState(1);

  const imageClickHandle = () => {
    router.push("../");
  };
  
  return (
    <div className="bg-black w-full h-screen flex flex-col">
      <Header />
      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex flex-col h-full">
        <div className="flex h-full">
          <div className="flex flex-col w-[220px] pt-6 pl-3">
          <Image
              src="/Arcus_Logo_v2.png"
              width={150}
              height={50}
              alt="Arcus Logo"
              onClick={imageClickHandle}
              className="hover:cursor-pointer pb-4"
            />
            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./")}
            >
              <AiOutlineHome className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Home
              </span>
            </div>
{/* 
            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./Lendnborrow")}
            >
              <PiVaultLight className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Lend N' Borrow
              </span>
            </div> */}

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
          <div className="flex flex-col w-full h-full items-center justify-center px-4">
            <Image
              src={"/Arcus_logo.png"}
              width={120}
              height={120}
              alt="arcus png"
            />
                        <AddToVault />
            <div className="mt-[50px] w-[1000px] h-[500px] bg-[#1E1E1E] rounded-lg items-center justify-center flex flex-col">

                <a href="http://arcusbtc.com/" className="text-[36px] font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Learn more!</a>
                <br />          <br />
              <span className="text-[#FFFFFF] font-Exo2 text-[30px] text-center">
                Unlock Bitcoin DeFi, by partneting with the Arcus Bitcoin vault.
              </span>
    
              <span className="mt-12 text-[#BBBBBB] font-Exo2 text-[24px] text-center">
                Arcus allows BTC holders to keep control of their BTC, while
                providing access to the latest alpha available on the crypto
                markets.{" "}
              </span>
              <span className="mt-8 text-[#BBBBBB] font-Exo2 text-[24px] text-center">
                Exclusive access for this exciting testnet coming soon
              </span>
              <span className="mt-8 text-white font-Exo2 text-[24px] text-center">
                Stay turned to 
                <a className="ml-3 text-[#42EACA] underline text-[30px]" href="https://twitter.com/arcusbtc">https://twitter.com/arcusbtc</a>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-[#2C2C2C]" />
        <div className="flex mt-auto">
          <Footer className="h-[80px]" />
        </div>
      </div>
    </div>
  );
}
