//  Historical Graphs Tab on Vault Details including TVL and Earnings History

import LineChartM from "../LineChartM";

export default function Tab_Historical() {
    function createData(time, amount) {
        return { time, amount };
    }
      
    const data1 = [
        createData('01/01', 0),
        createData('02/01', 400),
        createData('03/01', 500),
        createData('04/01', 800),
        createData('05/01', 650),
        createData('06/01', 1300),
        createData('07/01', 1600),
        createData('08/01', 1500),
        createData('09/01', 2000),
    ];

    const data2 = [
        createData('01/01', 0),
        createData('02/01', 150),
        createData('03/01', 400),
        createData('04/01', 500),
        createData('05/01', 450),
        createData('06/01', 500),
        createData('07/01', 850),
        createData('08/01', 1000),
        createData('09/01', 1100),
    ];

    return (
        <div className="flex w-full">
            <div className="mt-4 w-1/2 flex flex-col p-5 border-2 border-[#555555] rounded-xl">
                <span className="flex text-white font-bold underline text-[24px]">Vault Historical TVL</span>
                <span className="flex text-white italic text-[16px]">Sample Data Provided</span>
                <LineChartM data={data1} className="mt-3" />
            </div>
            <div className="mt-4 ml-4 w-1/2 flex flex-col p-5 border-2 border-[#555555] rounded-xl">
                <span className="flex text-white font-bold underline text-[24px]">Vault Earnings History</span>
                <span className="flex text-white italic text-[16px]">Sample Data Provided</span>
                <LineChartM data={data2} className="mx-auto" />
            </div>
        </div>
    )
}