import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useRecoilValue } from "recoil";
import { Analyser, Destination, Transport } from "tone";
import machineIsOnAtom from "../../lib/store/machineIsOnAtom";

interface AudioVisualizerData {
  name: number;
  value: number;
}

const defaultData = [
  { name: 0, value: -150 },
  { name: 1, value: -150 },
  { name: 2, value: -150 },
  { name: 3, value: -150 },
  { name: 4, value: -150 },
  { name: 5, value: -150 },
  { name: 6, value: -150 },
  { name: 7, value: -150 },
  { name: 8, value: -150 },
  { name: 9, value: -150 },
  { name: 10, value: -150 },
  { name: 11, value: -150 },
  { name: 12, value: -150 },
  { name: 13, value: -150 },
  { name: 14, value: -150 },
  { name: 15, value: -150 },
];

const AudioVisualizer = () => {
  const [data, setData] = useState<AudioVisualizerData[]>(defaultData);
  const machineIsOn = useRecoilValue(machineIsOnAtom);

  useEffect(() => {
    if (machineIsOn) {
      const analyser = new Analyser("fft", 16);
      Destination.connect(analyser);
      Transport.scheduleRepeat(
        () => {
          const frequencyData = analyser.getValue();
          // Convert the frequency data to an array of data points
          const newData = Array.from(frequencyData as ArrayLike<number>).map(
            (value, index) => ({
              name: index,
              value,
            })
          );

          setData(newData);
        },
        "128n",
        "0:1:0"
      );
    }
  }, [machineIsOn]);
  return (
    <div className="w-full max-w-2xl p-1 sm:h-52 md:h-44 lg:h-60 md:p-4 lg:p-8">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data as any}>
          <CartesianGrid
            horizontal={false}
            vertical={false}
            fill="black"
            fillOpacity={0.2}
          />
          <YAxis width={0} ticks={[-10]} domain={[-80, -10]} />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            dot={false}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AudioVisualizer;
