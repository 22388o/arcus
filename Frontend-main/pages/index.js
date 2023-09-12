import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AiOutlineHome } from "react-icons/ai";
import { PiBridgeDuotone } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"; // Import useEffect
import Image from "next/image";
import DepositModal from "@/components/DepositModal";
import WithdrawModal from "@/components/WithdrawModal";

export default function Home() {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  const [isDepositModal, setDepositModal] = useState(false);
  const [isWithdrawModal, setWithdrawModal] = useState(false);

  const handleOpenDeposit = () => {
    setDepositModal(true);
  };

  const handleCloseDeposit = () => {
    setDepositModal(false);
  };

  const handleOpenWithdraw = () => {
    setWithdrawModal(true);
  };

  const handleCloseWithdraw = () => {
    setWithdrawModal(false);
  };

  const imageClickHandle = () => {
    router.push("../");
  };

  return (
    <div className="bg-black w-full h-screen flex flex-col">
      {/* Connect Wallet / Header */}

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

      

      {/* Sidebar */}

      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex flex-col h-full">
        <div className="flex h-full">
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

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./dashboard")}
            >
              <LuLayoutDashboard className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                Dashboard
              </span>
            </div>

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("./")}
            >
              <PiBridgeDuotone className="text-white text-[20px]" />
              <span className="text-gray-400 font-Exo2 text-[14px] ml-3">
                ZK Bridge
              </span>
            </div>

            <div
              className="p-3 bg-transparent hover:bg-[#1E1E1E] flex rounded-lg w-[200px] hover:cursor-pointer"
              onClick={() => router.push("http://arcusbtc.com")}
            >
              <PiBookOpenTextLight className="text-white text-[20px]" />
              <span className="text-white font-Exo2 text-[14px] ml-3">
                About
              </span>
            </div>
          </div>
        </div>
      </div>

          {/* Main Content */}
          <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="font-exo2 mt-10 text-white text-[64px] font-bold text-center text-yellow-100">
              Skip the wrap...
            </div>
            <div className="font-exo2 mt-10 text-white text-[64px] font-bold text-center text-yellow-100">
              Lend and Borrow native BTC.
            </div>
            <br />
            <br />

            <div className="flex items-center justify-center">
            <button
                className="text-[16px] md:text-[20px] py-5 px-8 bg-gradient-to-r from-[#BE936B] to-[#C6A26A] rounded-xl font-bold px-6 flex items-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#D8B98C] hover:to-[#C6A26A]"
                onClick={() => router.push("./dashboard")}
              >
                <BsArrowUpCircleFill className="text-[15px] mr-1" />
                Explore
              </button>
              {/* <button
                className="text-[16px] md:text-[20px] py-5 bg-gradient-to-r from-[#BE936B] to-[#C6A26A] rounded-xl font-bold px-6 flex items-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#D8B98C] hover:to-[#C6A26A]"
                onClick={handleOpenDeposit}
              >
                <BsArrowUpCircleFill className="text-[15px] mr-1" />
                Invest Now
              </button>

              <div className="px-10" /> */}
              

            </div>
          </div>
       
    
      {/* Invest Now Deposit Modal */}

      <div className="flex w-full justify-center mt-6 md:mt-12">
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-[15px]">
          {isDepositModal && (
            <DepositModal
              isOpen={isDepositModal}
              onClose={handleCloseDeposit}
              vaultName={"BTC Vault - Deposit"}
            ></DepositModal>
          )}
          {isWithdrawModal && (
            <WithdrawModal
              isOpen={isWithdrawModal}
              onClose={handleCloseWithdraw}
              vaultName={"BTC Vault - Withdraw"}
            ></WithdrawModal>
          )}
        </div>
      </div>


      {/* Footer */}

      <hr className="border-t-2 border-[#2C2C2C]" />
      <div className="flex mt-auto">
        <Footer className="h-[80px]" />
      </div>
    </div>
  );
}
