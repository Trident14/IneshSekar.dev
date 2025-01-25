import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const XPContext = createContext();

export const useXP = () => useContext(XPContext);

export const XPProvider = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [maxXP, setMaxXP] = useState(1000);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const earnXP = (points) => {
    setXp((prevXp) => {
      const newXp = prevXp + points;

      toast(`You've earned ${points} XP!`, {
        icon: '🎉',
        duration: 1500,
      });
      console.log(`You've earned ${newXp} XP!`);

      if (newXp >= maxXP) {
        toast.success("Congrats! You've reached all XP!", {
          duration: 1500,
        });
        setShowModal(true);
        setShowConfetti(true);
      }
      return newXp >= maxXP ? maxXP : newXp;
    });
  };

  return (
    <XPContext.Provider value={{ xp, earnXP, level, maxXP }}>
      {children}


     

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-100 animate__animated animate__fadeIn flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-4">Well Done! You've Completed Your Journey!</h2>
            
            <iframe src="https://itch.io/embed/2849586" width="552" height="167" frameborder="0"><a href="https://velociraptor10.itch.io/lantern-quest">Lantern Quest by Velociraptor10</a></iframe>
            
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition" style={{marginTop:"1rem",width:"25%"}}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </XPContext.Provider>
  );
};
