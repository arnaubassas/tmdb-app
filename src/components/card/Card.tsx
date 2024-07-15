import { Link } from "react-router-dom";

import "./card.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  id: number;
}

const Card: React.FC<CardProps> = ({ children, id }) => {
  return (
    <Link to={`/serie/${id}`} className="card">
      {children}
    </Link>
  );
};

export default Card;
