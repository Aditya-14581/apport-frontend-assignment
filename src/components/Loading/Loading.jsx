import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = ({
  size = 80,
  color = "#4fa94d",
  text = "Loading...",
  showCircles = true,
  circleSize = 100,
  circleColor = "#4fa94d",
  textColor = "#4fa94d",
  textStyle = {},
  backgroundOverlayColor = "rgba(0, 0, 0, 0.3)",
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: backgroundOverlayColor,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
        opacity: 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {showCircles && (
        <ThreeCircles
          height={circleSize}
          width={circleSize}
          color={circleColor}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor={circleColor}
          innerCircleColor={circleColor}
          middleCircleColor={circleColor}
          style={{
            borderRadius: "50%",
            animation: "rotate 1.5s infinite linear",
          }}
        />
      )}

      <span
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: textColor,
          letterSpacing: "2px",
          textTransform: "uppercase",
          textShadow: "0px 0px 12px rgba(0, 0, 0, 0.5)",
          animation: "pulse 2s infinite alternate",
          ...textStyle,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {text}
      </span>

      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.9;
            }
            100% {
              transform: scale(1.1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
