import React from "react";

interface EcgWaveformProps {
  className?: string;
  color?: string;
}

export const EcgWaveform: React.FC<EcgWaveformProps> = ({
  className = "",
  color = "#C5A880",
}) => {
  return (
    <div className={`overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 500 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M0 30 L110 30 L125 30 L135 15 L145 45 L155 5 L165 52 L175 22 L185 35 L195 30 L320 30 L335 15 L345 45 L355 5 L365 52 L375 22 L385 35 L395 30 L500 30"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-ecg"
        />
      </svg>
    </div>
  );
};
