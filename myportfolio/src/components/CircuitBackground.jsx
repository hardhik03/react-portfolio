// Updated CircuitBackground.jsx with full responsiveness and better mobile/device safety

import React, { useEffect, useState } from "react";
import "./CircuitBackground.css";

function getSquareWavePoints(width, height, amplitude = 0.18, pulses = 8) {
  const midX = width / 2;
  const step = midX / pulses;
  const yCenter = height / 2;
  const yHigh = yCenter - amplitude * height;
  const yLow = yCenter + amplitude * height;
  let points = [[0, yCenter]];
  let currentX = 0;
  for (let i = 0; i < pulses; i++) {
    points.push([currentX, yHigh]);
    currentX += step / 2;
    points.push([currentX, yHigh]);
    points.push([currentX, yLow]);
    currentX += step / 2;
    points.push([currentX, yLow]);
    points.push([currentX, yCenter]);
  }
  points.push([midX, yCenter]);
  return points;
}

function getACPath(width, height, phase = 0, amplitude = 0.18, cycles = 8, steps = 100) {
  const midX = width / 2;
  const yCenter = height / 2;
  let path = `M ${midX} ${yCenter}`;
  const acStep = (width - midX) / steps;
  for (let x = midX; x <= width; x += acStep) {
    const radians = (((x - midX) / (width - midX)) * cycles * 2 * Math.PI) + phase;
    const y = yCenter + Math.sin(radians) * amplitude * height;
    path += ` L ${x} ${y}`;
  }
  return path;
}

function pointsToPath(points) {
  return "M " + points.map(([x, y]) => `${x},${y}`).join(" L ");
}

const CircuitBackground = () => {
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = dimensions;
  const phases = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  const colors = ["#ff2a2a", "#ffe600", "#0090ff"];
  const opacities = [0.1, 0.1, 0.1];
  const animationSpeed = `${Math.max(5, width / 300)}s`; // Scales animation speed

  const gridSpacing = Math.max(40, width / 30);
  const gridLinesV = [];
  const gridLinesH = [];

  for (let x = 0; x <= width; x += gridSpacing) {
    gridLinesV.push(
      <line
        key={`v${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={height}
        stroke="#fff"
        strokeWidth="1"
        opacity="0.1"
      />
    );
  }
  for (let y = 0; y <= height; y += gridSpacing) {
    gridLinesH.push(
      <line
        key={`h${y}`}
        x1={0}
        y1={y}
        x2={width}
        y2={y}
        stroke="#fff"
        strokeWidth="1"
        opacity="0.1"
      />
    );
  }

  return (
    <div className="circuit-bg">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {gridLinesV}
        {gridLinesH}

        <line
          x1={width / 2}
          y1={0}
          x2={width / 2}
          y2={height}
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.1"
        />

        <rect
          x="0"
          y="0"
          width={width / 2}
          height={height}
          fill="#000"
          opacity="0.35"
        />

        <path
          d={pointsToPath(getSquareWavePoints(width, height))}
          stroke="white"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          opacity="0.15"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0,2000"
            to="2000,0"
            dur={animationSpeed}
            repeatCount="indefinite"
          />
        </path>

        {phases.map((phase, idx) => (
          <path
            key={idx}
            d={getACPath(width, height, phase,0.18,3)}
            stroke={colors[idx]}
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            opacity={opacities[idx]}
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,2000"
              to="2000,0"
              dur={animationSpeed}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>
    </div>
  );
};

export default CircuitBackground;
