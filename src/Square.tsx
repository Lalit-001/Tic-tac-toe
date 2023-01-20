import { FC } from "react";

type props = { player?: string; index: number; onClick(event: any): void };

const Square: FC<props> = ({ player, index, onClick }) => {
  const scale = player ? " scale-100" : " scale-0";
  const textColor = player === "X" ? " text-red-600" : "text-fuchsis-400";
  const hoverStyle = "transition duration-500 hover:scale-105 transform ";
  return (
    <div
      data-cell-index={index}
      {...{ onClick }}
      className={
        "p-4 border-4 mr-1 border-blue-600 w-12 h-16 md:w-28 md:h-32 bg-gradient-to-r from-gray-400 to-white font-bold font-Lobster text-xl md:text-3xl cursor-pointer text-center flex items-center justify-center " +
        hoverStyle
      }
    >
      <span
        data-cell-index={index}
        className={`transform transition-all ease-out ${scale} ${textColor}`}
      >
        {player}
      </span>
    </div>
  );
};

export default Square;
