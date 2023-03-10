import React, { SetStateAction, useEffect, useState } from "react";
import { Dispatch } from "react";
import { resetArray } from "../utils/Array/Array";

interface SettingsInterface {
  setArray: Dispatch<SetStateAction<number[]>>;
}

const Settings: React.FC<SettingsInterface> = ({ setArray }) => {
  const [arraySize, setArraySize] = useState<number>(100);

  const handleChange = (event: any) => {
    setArraySize(event.target.value);
  };

  useEffect(() => {
    resetArray(arraySize, setArray);
  }, [arraySize]);

  return (
    <div className="settings">
      <span onClick={() => resetArray(arraySize, setArray)}>Reset</span>
      <div>
        Change array size ({arraySize})
        <input type="range" min="4" max="500" onChange={handleChange} />
      </div>
      <div>Algorithms</div>
    </div>
  );
};

export default Settings;
