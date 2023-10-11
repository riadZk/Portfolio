
import { createContext, useState } from "react";

export const ModeContext = createContext(null);

export const Context = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = (e) => {
    setDarkMode( 
        e.target.checked 
        )
};
  const contextValue = {
    handleModeChange,
    darkMode
  };
  return (
    <ModeContext.Provider value={contextValue}>
      {props.children}
    </ModeContext.Provider>
  );
};

