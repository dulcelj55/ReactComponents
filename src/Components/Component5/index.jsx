import {useState}from "react";
import "./index.css"

const Component5 = () => {
  const [theme, setTheme] = useState("dark");

  const turn = () => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme('dark');
    }
  };

  return (
    <>
      <button onClick={turn}>Switch</button>
      <div className={theme}> DARK MODE</div>
    </>
  );
};

export default Component5;
