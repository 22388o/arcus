import { AiOutlineCopy } from "react-icons/ai";

export default function Tab_Stratigies() {
  return (
    <div className="flex w-full">
      <div className="mt-4 w-1/2 flex flex-col">
        <span className="font-exo2 text-white font-bold text-[24px] underline">
          Alex LP Strategy
        </span>
        <div className="flex items-center ">
          <span className="font-exo2 text-[#C2C2C2] font-bold text-[12px] ml-2 mt-3 tracking-widest">
            {"[STACKS TESTNET CONTRACT ADDRESS]"}
          </span>
          <AiOutlineCopy className="ml-3 text-[#C2C2C2] text-[18px] mt-2" />
        </div>
        <div className="w-full font-exo2 text-[#B4B4B4] text-[18px] mt-5 tracking-wider">
          Enabling the ALEX DeFi liquidty pool and yield farming apy into our
          vault.
          <br /> Automated Yield based on the highest yield suffered by the ALEX
          BTC DeFi protocol.
        </div>
      </div>
      <div className="mt-4 w-1/2 flex flex-col px-10">
        <div className="flex flex-col w-full px-10">
          <span className="font-exo2 text-white font-bold text-[24px] underline">
            Risk Score
          </span>
          <div className="flex w-full p-4 border-2 border-[#555555] ml-2 mt-5 rounded-2xl pl-20 py-10">
            <div className="flex flex-col w-1/2 pr-[60px]">
              <div className="flex justify-between ">
                <span className="font-exo2 text-white text-[16px]">
                  TVL Impact
                </span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-exo2 text-white">Code Review Score</span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-exo2 text-white">Longevity Impact</span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-exo2 text-white">
                  Team Knowledge Score
                </span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
            </div>
            <div className="flex flex-col w-1/2 pr-[60px] ml-3">
              <div className="flex justify-between ">
                <span className="font-exo2 text-white text-[16px]">
                  Audit Score
                </span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-exo2 text-white">Complexity Score</span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-exo2 text-white">
                  Protocol Safety Score
                </span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-exo2 text-white">Testing Score</span>
                <span className="font-exo2 text-white text-[18px]">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
