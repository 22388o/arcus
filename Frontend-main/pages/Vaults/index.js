import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import TransactionTable from "@/components/TransactionTable";
import Image from "next/image";

export default function Vaults() {
  const stxTestnetAddress = useSelector((state) => state.arcusInfo.stxAddress_testnet);
  console.log('stxTestnetAddress', stxTestnetAddress);
  const router = useRouter();
  const [accountSTX, setAccountSTX] = useState(0);


  const getSTXBalance = async () =>{
    let STXBalance = await axios.get(`https://api.testnet.hiro.so/extended/v1/address/${stxTestnetAddress}/stx`)
    console.log(STXBalance);
    setAccountSTX(STXBalance.data.balance);
  }
  useEffect(() => {
    if(stxTestnetAddress) {
      getSTXBalance();  
    }
  }, [stxTestnetAddress]);

  const imageClickHandle = () => {
    router.push("../");
  };

  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      <div className="flex justify-between items-center px-4 md:px-10 py-2">
        <Image
          src="/Arcus_Logo_v2.png"
          width={150}
          height={50}
          alt="Arcus Logo"
          onClick={imageClickHandle}
          className="hover:cursor-pointer"
        />
        <Header />
      </div>
      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex flex-col flex-1">
        <div className="flex">
          <div className="flex flex-col w-[100px] pt-6 pl-3">
          <Image
            src="/alogo_v2-r.png"
            width={100}
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

            {/* <div
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
          <div className="flex flex-col w-full items-center px-4 pb-10">
            <div className="p-[10px] mt-[50px] bg-[#1E1E1E] rounded-lg w-full md:w-[80%] mx-auto space-y-4 md:space-y-0 md:flex md:justify-between md:px-[150px]">
                <div className="flex flex-col w-fix h-full items-center justify-center">
                    <span className="text-white font-exo2 text-[20px] text-center">Total Available</span>
                    <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">{accountSTX / 1000000} STX</span>
                </div>
                <div className="flex flex-col w-fix h-full items-center justify-center">
                    <span className="text-white font-exo2 text-[20px] text-center">Total Deposited</span>
                    <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">0 STX</span>
                </div>
                <div className="flex flex-col w-fix h-full items-center justify-center">
                    <span className="text-white font-exo2 text-[20px] text-center">Total Pending Earnings</span>
                    <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">0 STX</span>
                    <span className="text-white font-exo2 text-[14px] text-center">0 BTC</span>
                </div>
            </div>
            
            <div className="p-[10px] mt-[50px] bg-[#1E1E1E] rounded-lg w-full md:w-[80%] mx-auto py-[40px] space-y-4">
              <span className="text-white font-exo2 text-[24px] font-bold">Vaults</span>
              <div className="items-center justify-between">
                    <TransactionTable />
                </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-[#2C2C2C]" />
        <div className="flex">
          <Footer className="h-[80px]" />
        </div>
      </div>
    </div>
  );
}
