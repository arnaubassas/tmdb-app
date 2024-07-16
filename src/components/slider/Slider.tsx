import { ReactNode } from "react";
import "./slider.scss";

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  return <div className="slider">{children}</div>;
};

export default Slider;
