import React from "react";

// YouTube-style spinner component
const YouTubeLoader = ({ size = 40, color = "#ff0000" }) => {
  // Custom CSS for the spinner
  const spinnerStyles = `
    @keyframes youtube-spinner-rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes youtube-spinner-dash {
      0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
      50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
      100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
    }
  `;

  return (
    <div className="flex items-center justify-center">
      <style dangerouslySetInnerHTML={{ __html: spinnerStyles }} />
      <svg
        viewBox="0 0 50 50"
        className={`w-${size / 4} h-${size / 4}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          animation: "youtube-spinner-rotate 2s linear infinite",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          stroke={color}
          strokeLinecap="round"
          style={{
            animation: "youtube-spinner-dash 1.5s ease-in-out infinite",
            strokeDasharray: "90, 150",
            strokeDashoffset: "-35",
          }}
        />
      </svg>
    </div>
  );
};

// Example usage component
export default function LoaderExample() {
  return (
    <div className="p-8 bg-[#f1e5e5] min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <YouTubeLoader size={50} color="#ff0000" />
        <p className="mt-2! text-2xl animate-pulse text-black">Loading...</p>
      </div>
    </div>
  );
}

//  {/* <div className="flex flex-col items-center">
//       <YouTubeLoader size={70} color="#10b981" />
//       <p className="mt-2 text-white">Large Green</p>
//     </div> */}

//     {/* <div className="mb-8">
//   <YouTubeLoader size={40} color="#ff0000" />
// </div> */}

//   {/* <div className="flex flex-col items-center">
//     <YouTubeLoader size={30} color="#3b82f6" />
//     <p className="mt-2 text-white">Small Blue</p>
//   </div> */}
