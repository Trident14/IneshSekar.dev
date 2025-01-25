import React, { createContext, useState, useContext } from 'react';

const XPContext = createContext();

export const useXP = () => useContext(XPContext);

export const XPProvider = ({ children }) => {
  const [xp, setXp] = useState(0);  // Starting XP
  const [level, setLevel] = useState(1);  // Tracking level, if needed
  const [maxXP, setMaxXP] = useState(1000);  // Max XP to reach "All"

  const earnXP = (points) => {
    setXp((prevXp) => {
      alert(`You've earned ${points} XP!`);
      
      const newXp = prevXp + points;
      console.log(`You've earned ${newXp} XP!`);
      if (newXp >= maxXP) {
        alert("Success! You've reached all XP.");
        return maxXP;
      }
      return newXp;
    });
  };

  return (
    <XPContext.Provider value={{ xp, earnXP, level, maxXP }}>
      {children}
    </XPContext.Provider>
  );
};
