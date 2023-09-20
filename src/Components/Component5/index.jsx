import React from "react";

const Component5 = () => {
  const [theme, setTheme] = useState(dark);

  const turn = () => {
    if (useState == dark) {
      setTheme(light);
    } else if (useState == light) {
      setTheme(dark);
    }
  };

  return (
    <>
      <button onClick={turn}>Switch</button>
      <div className="dark"> DARK MODE</div>
    </>
  );
};

export default Component5;
