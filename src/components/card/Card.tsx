import "./card.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  size: "small" | "big";
}

const Card: React.FC<CardProps> = ({ children, size }) => {
  return <div className={`card__${size}`}>{children}</div>;
};

export default Card;
