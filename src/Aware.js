import { useState, useEffect } from "react";

// color list [blue, yellow, red, white]
const COLORS = ["bg-yellow-400", "bg-blue-600", "bg-red-600"];

const Aware = () => {
  const [color, setColor] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((c) => (c === 2 ? 0 : c + 1));
      setNumber(Math.floor(Math.random() * 10 + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`h-screen p-2 mt-10 ${COLORS[color]}`}>
      <h1 className="text-black text-9xl pt-56 text-center">{number}</h1>
    </div>
  );
};
export default Aware;
