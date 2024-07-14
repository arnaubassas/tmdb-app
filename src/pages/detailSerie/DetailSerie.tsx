import { useEffect, useState } from "react";
import { DetailRequest } from "../../interfaces";
import { getSerieById } from "../../services";

const DetailSerie = () => {
  const [serie, setSerie] = useState<DetailRequest>();
  const id = 76479;

  useEffect(() => {
    getSerieById(id).then((data) => {
      console.log(data);
      setSerie(data);
    });
  }, []);

  return (
    <>
      <div>sdas</div>
    </>
  );
};

export default DetailSerie;
