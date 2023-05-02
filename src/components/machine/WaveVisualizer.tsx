import React, { useEffect, useRef } from "react";
import * as Tone from "tone";

interface WaveVisualizerProps {
  synth: Tone.PolySynth;
}

function WaveVisualizer({ synth }: WaveVisualizerProps) {
  const waveformRef = useRef<Tone.Waveform>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const waveform = new Tone.Waveform();
    synth.connect(waveform);
    waveformRef.current = waveform;
    return () => {
      synth.disconnect(waveform);
      waveform.dispose();
    };
  }, [synth]);

  useEffect(() => {
    const animationId = requestAnimationFrame(drawWaveform);
    return () => {
      cancelAnimationFrame(animationId);
    };
  });

  function drawWaveform() {
    const canvas = canvasRef.current;
    const width = canvas?.width ?? 0;
    const height = canvas?.height ?? 0;
    const values = waveformRef.current?.getValue();
    if (!values || !canvas) return;
    const numSamples = values.length;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "#61E786";
    for (let i = 0; i < numSamples; i++) {
      const x = (i / numSamples) * width;
      const y = (0.5 + values[i] / 2) * height;
      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
    context.stroke();
    requestAnimationFrame(drawWaveform);
  }
  return <canvas className="w-full h-full px-2" ref={canvasRef} />;
}

export default WaveVisualizer;
