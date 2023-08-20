import { useRouter } from "next/router";
import Tab from "@/components/Tab";
import Header from "@/components/Header";
import { useState } from "react";
import DepositModal from "@/components/DepositModal";
import WithdrawModal from "@/components/WithdrawModal";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Image from "next/image";

export default function DetailedVault() {
  const router = useRouter("");
  const [isDepositModal, setDepositModal] = useState(false);
  const [isWithdrawModal, setWithdrawModal] = useState(false);

  const imageClickHandle = () => {
    router.push("../");
  };

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

  return (
    <div className="bg-black w-full h-screen flex flex-col">
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
      <div className="w-full h-full bg-black items flex flex-col px-[15px] md:px-[30px] py-5 md:py-10">
        <span className="text-white font-exo2 text-[30px] md:text-[60px] font-bold text-center tracking-widest">
          Staked vBTC
        </span>
        <span className="text-[#C4C4C4] tracking-wide text-[12px] text-center mt-3 md:mt-5">
          {"[STACKS TESTNET CONTRACT ADDRESS]"}
        </span>
        <div className="mt-[30px] px-[100px] py-4 border-2 border-[#B4B4B4] w-full flex justify-between rounded-lg">
          <div className="flex flex-col items-center justify-center w-fit">
            <span className="text-[#B4B4B4] text-[16px]">
              Total Locked Vaule (TVL)
            </span>
            <span className="text-white text-[24px] font-bold tracking-widest">
              44,533,491.50
            </span>
            <span className="text-[#B4B4B4] text-[12px]">$ 36,483,261.31</span>
          </div>
          <div className="flex flex-col items-center justify-center w-fit">
            <span className="text-[#B4B4B4] text-[16px]">Net APY</span>
            <span className="text-white text-[24px] font-bold tracking-widest">
              --%
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-fit">
            <span className="text-[#B4B4B4] text-[16px]">Deposited</span>
            <span className="text-white text-[24px] font-bold tracking-widest">
              0.00 BTC
            </span>
            <span className="text-[#B4B4B4] text-[12px]">$ 0.00</span>
          </div>
          <div className="flex flex-col items-center justify-center w-fit">
            <span className="text-[#B4B4B4] text-[16px]">
              Total Rewards Earned
            </span>
            <span className="text-white text-[24px] font-bold tracking-widest">
              0.00 ABR
            </span>
            <span className="text-[#B4B4B4] text-[12px]">$ 0.00</span>
          </div>
        </div>

        <div className="flex w-full justify-center mt-6 md:mt-12">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-[2rem]">
            <button
              className="text-[16px] md:text-[20px] py-5 bg-gradient-to-r from-[#BE936B] to-[#C6A26A] rounded-xl font-bold px-6 flex items-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#D8B98C] hover:to-[#C6A26A]"
              onClick={handleOpenDeposit}
            >
              <BsArrowUpCircleFill className="text-[15px] mr-1" />
              Deposit
            </button>

            {isDepositModal && (
              <DepositModal
                isOpen={isDepositModal}
                onClose={handleCloseDeposit}
                vaultName={"BTC Vault - Deposit"}
              ></DepositModal>
            )}
            <button
              className="text-[16px] md:text-[20px] py-5 bg-gradient-to-r from-[#E0E0E0] to-[#FFCCCB] rounded-xl font-bold px-6 flex items-center transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#FFCCCB] hover:to-[#FFCCCB]"
              onClick={handleOpenWithdraw}
            >
              <BsArrowDownCircleFill className="text-[15px] mr-1" />
              Withdraw
            </button>
            {isWithdrawModal && (
              <WithdrawModal
                isOpen={isWithdrawModal}
                onClose={handleCloseWithdraw}
                vaultName={"BTC Vault - Withdraw"}
              ></WithdrawModal>
            )}
          </div>
        </div>
        <Tab />
      </div>
    </div>
  );
}
