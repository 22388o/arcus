// About Tab on Vault Details

export default function Tab_About() {
    return (
        <div className="flex w-full">
            <div className="mt-4 w-1/2 flex flex-col">
                <span className="font-exo2 text-white font-bold text-[24px] underline">Description</span>
                <div className="w-full font-exo2 text-[#B4B4B4] text-[14px] mt-5 tracking-wider">
                Our vault enables users to securely hold BTC on the main chain while seamlessly engaging in lucrative yield strategies. 
                </div>
            </div>
            <div className="mt-4 w-1/2 flex flex-col px-10">
                <div className="flex flex-col w-full px-10">
                    <span className="font-exo2 text-white font-bold text-[24px] underline">Arcus Fees</span>
                    <div className="flex space-x-12 px-10">
                        <div className="flex flex-col mt-5">
                            <span className="font-exo2 text-white text-[13px]">Deposit / Withdrawal fee</span>
                            <span className="font-exo2 text-white font-bold text-[20px]">0%</span>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="font-exo2 text-white text-[13px]">Management fee</span>
                            <span className="font-exo2 text-white font-bold text-[20px]">0%</span>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="font-exo2 text-white text-[13px]">Performance fee</span>
                            <span className="font-exo2 text-white font-bold text-[20px]">10%</span>
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 mt-10">
                    <hr />
                </div>
                <div className="flex flex-col w-full px-10 mt-[50px]">
                    <span className="font-exo2 text-white font-bold text-[24px] underline">APY</span>
                    <div className="flex flex-col w-full px-10 mt-5">
                        <span className="font-exo2 text-white font-bold text-[16px]">Inception APY - 0%</span>
                        <br />
                        <span className="font-exo2 text-white font-bold text-[16px]">Yearly APY - 0%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}