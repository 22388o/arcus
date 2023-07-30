import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label } from 'recharts';

// Generate Sales Data


export default function LineChartM({data}) {
  const theme = useTheme();

  return (
    <div className='w-full flex justify-center mt-8'>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
          width={600}
          height={250}
        >
          <XAxis
            dataKey="time"
            stroke="white"
            style={theme.typography.body2}
          />
          <YAxis
            stroke="white"
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              stroke='white'
              style={{
                textAnchor: 'middle',
              }}
            >
              Thousands ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
    </div>
  );
}
