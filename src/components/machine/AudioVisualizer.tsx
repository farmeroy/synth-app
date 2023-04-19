import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useRecoilValue } from "recoil";
import { Analyser, Destination, Transport } from "tone";
import machineIsOnAtom from "../../lib/store/machineIsOnAtom";

const AudioVisualizer = () => {
  const [data, setData] = useState([]);
  const machineIsOn = useRecoilValue(machineIsOnAtom);

  useEffect(() => {
    if (machineIsOn) {
      const analyser = new Analyser("fft", 16);
      Destination.connect(analyser);
      Transport.scheduleRepeat(
        () => {
          const frequencyData = analyser.getValue();
          console.log(frequencyData);

          // Convert the frequency data to an array of data points
          const newData = Array.from(frequencyData).map((value, index) => ({
            name: index,
            value,
          }));

          // Update the data state
          setData(newData);
          console.log(newData);
          console.log(newData);
        },
        "128n",
        "0:1:0"
      );
    }
    // Schedule the next update

    // Clean up the effect
  }, [machineIsOn]);
  return (
    <LineChart width={400} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis ticks={[-10]} domain={[-80, -10]} />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Line
        isAnimationActive={false}
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        dot={false}
        connectNulls={true}
      />
    </LineChart>
  );
};

export default AudioVisualizer;
