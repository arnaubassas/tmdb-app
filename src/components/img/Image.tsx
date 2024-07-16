import { useState } from "react";
import img from "../../img/img.jpg";
import bigImg from "../../img/bigimg.jpg";

interface ImageProps {
  src: string;
  alt: string;
  type: string;
  className: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, type, className }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  const handleError = () => {
    if (type == "small") setImgSrc(img);
    if (type == "big") setImgSrc(bigImg);
  };

  return (
    <img className={className} src={imgSrc} alt={alt} onError={handleError} />
  );
};

export default Image;
