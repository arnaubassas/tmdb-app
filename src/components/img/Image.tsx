import { useEffect, useState } from "react";
import img from "../../img/img.jpg";
import bigImg from "../../img/bigimg.jpg";

interface ImageProps {
  src: string;
  alt: string;
  size: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, size, className }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (size == "small") setImgSrc(img);
    if (size == "big") setImgSrc(bigImg);
  };

  return (
    <img className={className} src={imgSrc} alt={alt} onError={handleError} />
  );
};

export default Image;
