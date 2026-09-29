"use client";

import { motion, useTransform, MotionValue } from "motion/react";

export default function WordAnimation({
  children,
  progress,
}: {
  children: string;
  progress: MotionValue<number>;
}) {
  // Split into lines first by \n
  const lines = children.split("\n");

  // Total word count across all lines
  const allWords = lines.flatMap((line) =>
    line.trim().split(/\s+/).filter(Boolean),
  );
  const totalWords = allWords.length;

  let globalIndex = 0;

  return (
    <div className="flex flex-col items-center">
      {lines.map((line, lineIndex) => {
        const wordsInLine = line.trim().split(/\s+/).filter(Boolean);

        return (
          <div key={lineIndex} className="flex flex-wrap justify-center">
            {wordsInLine.map((word) => {
              const index = globalIndex++;
              // Animate sequentially across all lines
              const start = index / totalWords;
              const end = start + 1 / totalWords;

              return (
                <Word
                  key={index}
                  word={word}
                  progress={progress}
                  range={[start, end]}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.9, 1]);
  const blur = useTransform(progress, range, [6, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, filter, scale }}
      className="inline-block mr-[0.15em]">
      {word}
    </motion.span>
  );
}
