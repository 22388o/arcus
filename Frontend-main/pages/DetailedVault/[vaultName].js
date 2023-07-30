import { useRouter } from "next/router"
import Tab from "@/components/Tab";
import Header from "@/components/Header";
import { useState } from "react";
import DepositModal from "@/components/DepositModal";
import WithdrawModal from "@/components/WithdrawModal";
import { BsArrowUpCircleFill } from "react-icons/bs"
import { BsArrowDownCircleFill } from "react-icons/bs"

export default function DetailedVault() {

    const router = useRouter('');
    const [isDepositModal, setDepositModal] = useState(false);
    const [isWithdrawModal, setWithdrawModal] = useState(false);

    const handleOpenDeposit = () => {
        setDepositModal(true);
    }

    const handleCloseDeposit = () => {
        setDepositModal(false);
    }

    const handleOpenWithdraw = () => {
        setWithdrawModal(true);
    }

    const handleCloseWithdraw = () => {
        setWithdrawModal(false);
    }

    return (
        <div>
            <Header />
            <hr className="border-t-2 border-[#2C2C2C]" />
            <div className="w-full h-full bg-black items flex flex-col px-[30px] py-10">
                <span className="text-white font-exo2 text-[60px] font-bold text-center tracking-widest">Staked vBTC</span>
                <span className="text-[#C4C4C4] tracking-wide text-[12px] text-center mt-5">{"[STACKS TESTNET CONTRACT ADDRESS]"}</span>
                <div className="mt-[30px] px-[100px] py-4 border-2 border-[#B4B4B4] w-full flex justify-between rounded-lg">
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Total Locked Vaule (TVL)</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">44,533,491.50</span>
                        <span className="text-[#B4B4B4] text-[12px]">$ 36,483,261.31</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Net APY</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">--%</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Deposited</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">0.00 BTC</span>
                        <span className="text-[#B4B4B4] text-[12px]">$ 0.00</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Total Rewards Earned</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">0.00 ABR</span>
                        <span className="text-[#B4B4B4] text-[12px]">$ 0.00</span>
                    </div>
                </div>
                <div className="flex w-full justify-center mt-12">
                    <div className="flex w-1/4 space-x-[100px]">
                        <button className='text-[20px] bg-[#42EACA] rounded-xl font-bold px-10 flex items-center text-center py-5' onClick={handleOpenDeposit}>
                            <BsArrowUpCircleFill className='text-[20px] mr-1' />
                            Deposit
                        </button>
                        {
                            isDepositModal && 
                            <DepositModal isOpen={isDepositModal} onClose={handleCloseDeposit} vaultName={'BTC Vault - Deposit'} ></DepositModal>
                        }
                        <button className='text-[20px] bg-[#F0B90B] rounded-xl font-bold px-10 flex items-center text-center py-5' onClick={handleOpenWithdraw}>
                            <BsArrowDownCircleFill className='text-[20px] mr-1' />
                            Withdraw
                            </button>
                        {
                            isWithdrawModal && 
                            <WithdrawModal isOpen={isWithdrawModal} onClose={handleCloseWithdraw} vaultName={'BTC Vault - Withdraw'} ></WithdrawModal>
                        }
                    </div>
                </div>
                <Tab />
            </div>
        </div>
    )
}