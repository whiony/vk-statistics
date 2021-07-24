import React, { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { animated, useTransition, interpolate } from "react-spring";

// data and types
const letters = [
  { letter: "3", frequency: 0.86 },
  { letter: "ds", frequency: 0.14 }
];

// accessor functions
const frequency = (d) => d.frequency;

// color scales
const getLetterFrequencyColor = scaleOrdinal({
  domain: letters.map((l) => l.letter),
  range: ["#7F7FD5", "#E786D7"]
});

// react-spring transition definitions
const fromLeaveTransition = ({ endAngle }) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0
});
const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle,
  opacity: 1
});

function AnimatedPie({
  unrotate = 20,
  offsetX = 10,
  offsetY = 20,
  textOffsetX = 10,
  textOffsetY = 20,
  fontSize = 12,
  animate,
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum
}) {
  const transitions = useTransition(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey
  });
  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc);
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
    const hasOffset = key === "14%";
    return (
      <g
        key={key}
        transform={hasOffset ? `translate(${offsetX}, -${offsetY})` : undefined}
      >
        <animated.path
          // compute interpolated path d attribute from intermediate angle values
          d={interpolate(
            [props.startAngle, props.endAngle],
            (startAngle, endAngle) =>
              path({
                ...arc,
                startAngle,
                endAngle
              })
          )}
          fill={getColor(arc)}
          onClick={() => onClickDatum(arc)}
          onTouchStart={() => onClickDatum(arc)}
        />
        {hasSpaceForLabel && (
          <animated.g
            transform={`rotate(-${unrotate})`}
            style={{ opacity: props.opacity }}
          >
            <text
              fill="white"
              x={centroidX + (hasOffset ? textOffsetX : 0)}
              y={centroidY + (hasOffset ? textOffsetY : 0)}
              dy=".33em"
              fontSize={fontSize}
              textAnchor="middle"
              pointerEvents="none"
            >
              {getKey(arc)}
            </text>
          </animated.g>
        )}
      </g>
    );
  });
}

export default function PieChart({
  width,
  height,
  animate = true
}) {
  const [selectedAlphabetLetter, setSelectedAlphabetLetter] = useState(null);

  if (width < 10) return null;

  const innerWidth = width
  const innerHeight = height
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;

  const rotation = 40;
  const offsetMultiplier = 0.7
  const offsetX = 10 * offsetMultiplier
  const offsetY = 20 * offsetMultiplier

  return (
    <svg width={width} height={height}>
      <rect
        rx={14}
        width={width}
        height={height}
        fill="url('#visx-pie-gradient')"
      />
      <Group top={centerY} left={centerX - offsetX}>
        <Group transform={`rotate(${rotation})`}>
          <Pie
            data={
              selectedAlphabetLetter
                ? letters.filter(
                  ({ letter }) => letter === selectedAlphabetLetter
                )
                : letters
            }
            pieValue={frequency}
            pieSortValues={() => -1}
            outerRadius={radius * 0.66}
          >
            {(pie) => {
              return (
                <AnimatedPie
                  unrotate={rotation}
                  offsetX={offsetX}
                  offsetY={offsetY}
                  fontSize={12}
                  textOffsetX={26}
                  textOffsetY={10}
                  {...pie}
                  animate={animate}
                  getKey={({ data: { frequency } }) =>
                    `${Math.floor(frequency * 100)}%`
                  }
                  onClickDatum={({ data: { letter } }) =>
                    animate &&
                    setSelectedAlphabetLetter(
                      selectedAlphabetLetter &&
                        selectedAlphabetLetter === letter
                        ? null
                        : letter
                    )
                  }
                  getColor={({ data: { letter } }) =>
                    getLetterFrequencyColor(letter)
                  }
                />
              );
            }}
          </Pie>
        </Group>
      </Group>
    </svg>
  );
}
