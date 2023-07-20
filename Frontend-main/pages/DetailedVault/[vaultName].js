import { useRouter } from "next/router"
import Tab from "@/components/Tab";
import { BsArrowUpCircleFill } from "react-icons/bs"
import { BsArrowDownCircleFill } from "react-icons/bs"
import Header from "@/components/Header";

export default function DetailedVault() {

    const router = useRouter('');

    return (
        <div>
            <Header />
            <hr className="border-t-2 border-[#2C2C2C]" />
            <div className="w-full h-full bg-black items flex flex-col px-[30px] py-10">
                <span className="text-white font-exo2 text-[60px] font-bold text-center tracking-widest">Staked yCRV</span>
                <span className="text-[#C4C4C4] tracking-wide text-[12px] text-center mt-5">ST10M9SK9RE5Z919TYVVMTZF9D8E0D6V8GR11BPA5</span>
                <div className="mt-[30px] px-[100px] py-4 border-2 border-[#B4B4B4] w-full flex justify-between rounded-lg">
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Total deposited, yCRV</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">44,533,491.50</span>
                        <span className="text-[#B4B4B4] text-[12px]">$ 36,483,261.31</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Net APY</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">36.45%</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Balance, st-yCRV</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">0.00</span>
                        <span className="text-[#B4B4B4] text-[12px]">$ 0.00</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-fit">
                        <span className="text-[#B4B4B4] text-[16px]">Earned, yCRV</span>
                        <span className="text-white text-[24px] font-bold tracking-widest">0.00</span>
                        <span className="text-[#B4B4B4] text-[12px]">$ 0.00</span>
                    </div>
                </div>
                <div className="flex w-full justify-center mt-10">
                    <div className="flex w-1/4 space-x-[100px]">
                        <button className='text-[20px] bg-[#42EACA] rounded-full font-bold px-10 flex items-center text-center py-5'><BsArrowUpCircleFill className='text-[20px] mr-1' />Deposite</button>
                        <button className='text-[20px] bg-[#F0B90B] rounded-full font-bold px-10 flex items-center text-center py-5'><BsArrowDownCircleFill className='text-[20px] mr-1' />Withdraw</button>
                    </div>
                </div>
                <Tab />
            </div>
        </div>
    )
}