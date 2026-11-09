import React from 'react';

interface LotusWaveDividerProps {
  className?: string;
  color?: string;
  accentColor?: string;
  inverted?: boolean;
}

export const LotusWaveDivider: React.FC<LotusWaveDividerProps> = ({
  className = '',
  color = '#E8B4B8',
  accentColor = '#C59B72',
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center py-6 overflow-hidden select-none pointer-events-none opacity-85 ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 w-full max-w-md px-6">
        {/* Left flowing line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C59B72]/30 to-[#C59B72]" />

        {/* Center SGB Botanical Leaf & Crown Lotus Emblem */}
        <div className="flex items-center gap-1.5 shrink-0 px-2">
          <span className="w-1 h-1 rounded-full bg-[#C59B72]" />
          <svg
            className="w-7 h-7 text-[#C59B72]"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center leaf */}
            <path
              d="M20 8 C17 15 17 21 20 25 C23 21 23 15 20 8 Z"
              fill={accentColor}
            />
            {/* Left petal */}
            <path
              d="M20 25 C15 21 11 17 14 12 C18 15 19 20 20 25 Z"
              fill={accentColor}
              fillOpacity="0.85"
            />
            {/* Right petal */}
            <path
              d="M20 25 C25 21 29 17 26 12 C22 15 21 20 20 25 Z"
              fill={accentColor}
              fillOpacity="0.85"
            />
            {/* Crown Lotus Base */}
            <path
              d="M13 30 C17 28 23 28 27 30"
              stroke={accentColor}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="33" r="1" fill={accentColor} />
          </svg>
          <span className="w-1 h-1 rounded-full bg-[#C59B72]" />
        </div>

        {/* Right flowing line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C59B72]/30 to-[#C59B72]" />
      </div>
    </div>
  );
};
