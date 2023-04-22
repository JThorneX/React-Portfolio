import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
  );
};

export default Mode;
