'use client';

import { useMemo } from 'react';

function StageScene() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, index) => ({
        id: index,
        cx: Math.random() * 1200,
        cy: Math.random() * 600,
        r: Math.random() * 3 + 1,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <svg
      className="stage-illustration"
      viewBox="0 0 1200 700"
      role="img"
      aria-labelledby="sceneTitle sceneDesc"
    >
      <title id="sceneTitle">Passionate performer on a cinematic stage</title>
      <desc id="sceneDesc">
        A young Indian man in a scarf sings into a vintage microphone beneath blue concert
        lighting and a cheering audience.
      </desc>
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#5fc9ff" stopOpacity="0.6" />
          <stop offset="35%" stopColor="#2351a6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#050621" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="lightCone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8fd3ff" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0d1a52" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sweaterGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b0d1a" />
          <stop offset="100%" stopColor="#1c223d" />
        </linearGradient>
        <linearGradient id="skinGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2a56a" />
          <stop offset="100%" stopColor="#d9783d" />
        </linearGradient>
        <linearGradient id="micMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4dbe6" />
          <stop offset="100%" stopColor="#7b8696" />
        </linearGradient>
        <clipPath id="headWrap">
          <path d="M520 200 Q600 120 680 200 Q690 280 640 320 Q540 340 500 300 Z" />
        </clipPath>
        <filter id="glow">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.278
                    0 0 0 0 0.682
                    0 0 0 0 1
                    0 0 0 0.6 0"
          />
        </filter>
      </defs>

      <rect width="1200" height="700" fill="url(#bgGradient)" />

      <g opacity="0.75" filter="url(#glow)">
        <path
          d="M350 0 L520 700 H760 L930 0"
          fill="url(#lightCone)"
          opacity="0.45"
        />
      </g>

      <g opacity="0.35">
        <ellipse cx="350" cy="480" rx="160" ry="50" fill="#0a173f" />
        <ellipse cx="870" cy="520" rx="220" ry="60" fill="#0a173f" />
      </g>

      <g className="audience">
        {sparkles.map((sparkle) => (
          <circle
            key={sparkle.id}
            cx={sparkle.cx}
            cy={sparkle.cy}
            r={sparkle.r}
            fill="#fff8d6"
            opacity={sparkle.opacity}
          />
        ))}
      </g>

      <g className="performer">
        <ellipse cx="600" cy="610" rx="150" ry="40" fill="#020618" opacity="0.7" />
        <path
          d="M600 340 C560 360 530 420 520 480 C505 570 520 620 600 620 C680 620 695 550 690 480 C685 410 645 350 600 340 Z"
          fill="url(#sweaterGradient)"
        />
        <path
          d="M560 320 Q600 350 640 320 Q650 370 630 380 Q610 390 590 390 Q560 380 560 320 Z"
          fill="#1a3f3c"
        />
        <g clipPath="url(#headWrap)">
          <rect x="520" y="170" width="180" height="180" fill="#2ba675" />
          <path d="M515 230 Q600 200 690 250" stroke="#51d89b" strokeWidth="22" />
        </g>
        <path
          d="M560 230 Q600 180 650 220 Q670 270 630 300 Q580 320 560 280 Z"
          fill="url(#skinGradient)"
        />
        <path
          d="M585 215 Q605 210 620 220"
          stroke="#4a2b13"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="614" cy="250" r="8" fill="#1b0d06" />
        <path
          d="M574 263 Q598 290 628 268"
          stroke="#3f1809"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M568 300 Q600 320 640 300 Q610 348 600 350 Q580 346 568 300 Z"
          fill="#2ba675"
          opacity="0.8"
        />
      </g>

      <g className="microphone">
        <path
          d="M690 340 Q710 350 720 390 C730 460 730 520 715 590"
          stroke="#d0d6e4"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M725 255 C705 250 685 260 678 280 C670 305 682 330 704 336 C724 340 744 330 750 308 C754 288 743 260 725 255 Z"
          fill="url(#micMetal)"
          stroke="#b6bdd0"
          strokeWidth="4"
        />
        <g>
          <rect x="687" y="267" width="48" height="8" rx="3" fill="#828ca0" />
          <rect x="689" y="279" width="44" height="8" rx="3" fill="#828ca0" />
          <rect x="691" y="291" width="40" height="8" rx="3" fill="#828ca0" />
          <rect x="693" y="303" width="36" height="8" rx="3" fill="#828ca0" />
        </g>
      </g>

      <g className="audience-silhouettes" opacity="0.65">
        <path
          d="M0 520 C120 500 220 550 340 540 C460 530 520 500 640 520 C760 540 860 500 960 510 C1050 520 1140 490 1200 500 L1200 700 L0 700 Z"
          fill="#050d28"
        />
        <path
          d="M0 560 C120 540 220 590 340 580 C460 570 520 540 640 560 C760 580 860 540 960 550 C1050 560 1140 530 1200 540 L1200 700 L0 700 Z"
          fill="#08153a"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="scene-wrapper">
        <StageScene />
      </div>
      <section className="narrative">
        <h1>Electric Raga</h1>
        <p>
          A young voice carrying timeless rhythms, the crowd hanging on every note. The cinematic
          blue haze and shimmering bokeh capture the raw confidence of the performance.
        </p>
        <p>
          Feel the pulse of the stage as tradition meets modern sound, silhouetted in light and
          emotion.
        </p>
      </section>
    </main>
  );
}
