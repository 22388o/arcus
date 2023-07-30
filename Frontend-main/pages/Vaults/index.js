import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AiOutlineHome } from "react-icons/ai";
import { PiVaultLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import TransactionTable from "@/components/TransactionTable";

export default function Vaults() {
  const router = useRouter();
  const [status, setStatus] = useState(1);
  const [accountSTX, setAccountSTX] = useState(0);


  // fix this function
  const getSTXBalance = async () =>{
    let STXBalance = await axios.get('https://api.testnet.hiro.so/extended/v1/address/ST10M9SK9RE5Z919TYVVMTZF9D8E0D6V8GR11BPA5/stx')
    console.log(STXBalance);
    setAccountSTX(STXBalance.data.balance);
  }
  getSTXBalance();

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
              onClick={() => router.push("./Vaults")}
            >
              <PiVaultLight className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Vaults
              </span>
            </div>
            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./About")}
            >
              <FcAbout className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                About
              </span>
            </div>
          </div>
          <div className="w-[2px] h-full bg-[#2C2C2C]"></div>
          <div className="flex flex-col w-full h-full items-center px-4 pb-10">
            <div className="w-[1200px] p-[10px] mt-[50px] bg-[#1E1E1E] rounded-lg items-center flex space-x-6 justify-between px-[150px]">
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
            <div className="w-[1200px] h-full py-[40px] mt-[50px] bg-[#1E1E1E] rounded-lg flex px-[50px]">
                <span className="text-white font-exo2 text-[24px] font-bold">Vaults</span>
                <div className="pl-[20px] items-center flex justify-between">
                    <TransactionTable />
                </div>
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
