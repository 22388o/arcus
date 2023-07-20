import LineChart from "../LineChart";

export default function Tab_Historical() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Vault Historical TVL',
            data: [
              {x: 'January', y: 33},
              {x: 'February', y: 45},
              {x: 'March', y: 57},
              {x: 'April', y: 39},
              {x: 'May', y: 80},
              {x: 'June', y: 81},
              {x: 'July', y: 56}
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
      const data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Vault Earnings History',
            data: [
              {x: 'January', y: 33},
              {x: 'February', y: 45},
              {x: 'March', y: 57},
              {x: 'April', y: 39},
              {x: 'May', y: 80},
              {x: 'June', y: 81},
              {x: 'July', y: 56}
            ],
            fill: false,
            borderColor: 'rgb(255, 192, 134)',
            tension: 0.1
          }
        ]
      };
    return (
        <div className="flex w-full">
            <div className="mt-4 w-1/2 flex flex-col p-5 border-2 border-[#555555] rounded-xl">
                <LineChart data={data} />
            </div>
            <div className="mt-4 ml-4 w-1/2 flex flex-col p-5 border-2 border-[#555555] rounded-xl">
                <LineChart data={data2} />
            </div>
        </div>
    )
}