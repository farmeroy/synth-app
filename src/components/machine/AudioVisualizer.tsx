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

const AudioVisualizer = () => {
  const [data, setData] = useState<AudioVisualizerData[] | null>([]);
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
    <ResponsiveContainer width="100%" height="100%">
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
  );
};

export default AudioVisualizer;
