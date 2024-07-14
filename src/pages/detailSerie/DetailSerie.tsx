import { useEffect, useState } from "react";
import { DetailRequest } from "../../interfaces";
import { getSerieById } from "../../services";
import { useParams } from "react-router-dom";

const DetailSerie = () => {
  const [serie, setSerie] = useState<DetailRequest>();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSerieById(id).then((data) => {
        setSerie(data);
      });
    }
  }, [id]);

  return <></>;
};

export default DetailSerie;
