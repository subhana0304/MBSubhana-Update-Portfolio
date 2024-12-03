import React, { useState, useEffect } from "react";

export default function CustomCursor() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newPosition = {
        x: event.clientX,
        y: event.clientY,
        id: Date.now(),
      };
      setPositions((prev) => [...prev, newPosition]);

      // Clear all trail elements after 5 seconds
      setTimeout(() => {
        setPositions([]);
      }, 8000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div className="relative w-screen h-screen">
        {positions.map((pos) => (
          <div
            key={pos.id}
            className="trail-circle"
            style={{
              left: pos.x,
              top: pos.y,
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        .trail-circle {
          position: fixed;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color: skyblue;
          animation: color-transition 2s ease-out forwards;
          z-index: 0;
        }

        @keyframes color-transition {
          0% {
            background-color: #fde047;
          }
          100% {
            background-color: #eab308;
          }
        }
      `}</style>
    </div>
  );
}
