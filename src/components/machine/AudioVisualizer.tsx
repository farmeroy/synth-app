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
import { Analyser, Destination } from "tone";

const AudioVisualizer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Create an AnalyserNode
    const analyser = new Analyser("fft", 64);

    // Connect it to the Tone.js output
    Destination.connect(analyser);

    // Update the data in real-time
    const updateData = () => {
      // Retrieve the frequency data
      const frequencyData = analyser.getValue();

      // Convert the frequency data to an array of data points
      const newData = Array.from(frequencyData).map((value, index) => ({
        name: index,
        value,
      }));

      // Update the data state
      setData(newData);

      // Schedule the next update
      requestAnimationFrame(updateData);
    };

    // Start updating the data
    updateData();

    // Clean up the effect
    return () => {
      // Stop updating the data
      cancelAnimationFrame(updateData);
    };
  }, []);

  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default AudioVisualizer;
