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
import LendingTable from "@/components/LendingTable";

export default function LendnBorrow() {
  const stxTestnetAddress = useSelector(
    (state) => state.arcusInfo.stxAddress_testnet
  );
  console.log("stxTestnetAddress", stxTestnetAddress);
  const router = useRouter();
  const [accountSTX, setAccountSTX] = useState(0);

  const getSTXBalance = async () => {
    let STXBalance = await axios.get(
      `https://api.testnet.hiro.so/extended/v1/address/${stxTestnetAddress}/stx`
    );
    console.log(STXBalance);
    setAccountSTX(STXBalance.data.balance);
  };
  useEffect(() => {
    if (stxTestnetAddress) {
      getSTXBalance();
    }
  }, [stxTestnetAddress]);

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
          <div className="flex flex-col w-full h-full items-center px-4 pb-10">
            <div className="w-[1000px] p-[10px] mt-[50px] bg-[#1E1E1E] rounded-lg items-center flex space-x-6 justify-between px-[150px]">
              <div className="flex flex-col w-fix h-full items-center justify-center">
                <span className="text-white font-exo2 text-[20px] text-center">
                  Total Available
                </span>
                <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">
                  -{" "}
                  <span className="text-[#FFA300] font-exo2 text-[20px] font-bold text-center">
                    BTC
                  </span>
                </span>
                
                <span className="text-white font-exo2 text-[14px] text-center">
                  {accountSTX / 1000000} STX
                </span>
              </div>

              <div className="flex flex-col w-fix h-full items-center justify-center">
                <span className="text-white font-exo2 text-[20px] text-center">
                  Total Pending Rewards
                </span>
                <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">
                  0{" "}
                  <span className="text-[#FFA300] font-exo2 text-[20px] font-bold text-center">
                    BTC
                  </span>
                </span>
                <span className="text-white font-exo2 text-[14px] text-center">
                  0 ABR
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center h-screen">
            <div className="w-full h-full items-center px-4 pb-10">
              <div className="w-[1200px] p-[10px] mt-[50px] bg-[#1E1E1E] rounded-lg items-center flex space-x-6 justify-between px-[150px]">
                <div className="flex flex-col w-fix h-full items-center justify-center">
                  <span className="text-white font-exo2 text-[20px] text-center">
                    Health Factor
                  </span>
                  <span className="text-[#00ff00] font-exo2 text-[20px] font-bold text-center">
                    1.56
                  </span>
                </div>
                <div className="flex flex-col w-fix h-full items-center justify-center">
                  <span className="text-white font-exo2 text-[20px] text-center">
                    Total Deposited
                  </span>
                  <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">
                  0{" "}
                  <span className="text-[#FFA300] font-exo2 text-[20px] font-bold text-center">
                    BTC
                  </span>
                </span>
                  <span className="text-white font-exo2 text-[14px] text-center">
                    0 STX
                  </span>
                </div>
                <div className="flex flex-col w-fix h-full items-center justify-center">
                  <span className="text-white font-exo2 text-[20px] text-center">
                    Total Supplied
                  </span>
                  <span className="text-[#B2B2B2] font-exo2 text-[20px] font-bold text-center">
                  0{" "}
                  <span className="text-[#FFA300] font-exo2 text-[20px] font-bold text-center">
                    BTC
                  </span>
                </span>
                  <span className="text-white font-exo2 text-[14px] text-center">
                    0 STX
                  </span>
                </div>
              </div>
            </div>
            </div>

            <div className="w-[1200px] h-full py-[40px] mt-[50px] bg-[#1E1E1E] rounded-lg flex px-[50px]">
              <span className="text-white font-exo2 text-[24px] font-bold pr-20">
                Lending
              </span>
              <div className="pl-[20px] items-center flex justify-between">
                <LendingTable />
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
