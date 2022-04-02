import { useState } from "react";

// color list [blue, yellow, red, white]
const COLORS = ["bg-yellow-400", "bg-blue-600", "bg-red-600"];

const Aware = () => {
  const [color, setColor] = useState(null);
  const [number, setNumber] = useState(null);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
    const interval = setInterval(() => {
      setColor((c) => (c === 2 ? 0 : c + 1));
      setNumber(Math.floor(Math.random() * 10 + 1));
    }, 1000);
    return () => clearInterval(interval);
  };

  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     setColor((c) => (c === 2 ? 0 : c + 1));
  //     setNumber(Math.floor(Math.random() * 10 + 1));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="w-screen h-screen absolute flex justify-center items-center">
        {show ? (
          <button className="border-black border-2 w-24" onClick={handleClick}>
            Start Here!
          </button>
        ) : null}
      </div>
      <div className={`w-screen h-screen p-2 mt-10 ${COLORS[color]}`}>
        <h1 className="text-black text-9xl pt-56 text-center">{number}</h1>
      </div>
    </div>
  );
};
export default Aware;
