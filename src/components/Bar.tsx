import React from "react";

interface BarInterface {
  number: number;
}

const Bar: React.FC<BarInterface> = ({ number }) => {
  return <div className="bar" style={{ height: number * 2 + "px" }}></div>;
};

export default Bar;
