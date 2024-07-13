import { useEffect, useState } from "react";
import { getSeries } from "../../services";
import { SeriesListRequest } from "../../interfaces";
import Card from "../../components/seriesList/card/Card";
import './list.scss'


const SeriesList = () => {

    const [series, setSeries] = useState<SeriesListRequest[]>();


    useEffect(() => {
        getSeries()
            .then((data) => {
                setSeries(data);
            })

    }, []);

    if (!series) return
    return (
        <>
            <div className="lista">
                {series && series.map((serie) => (
                    < Card key={serie.id} id={serie.id} name={serie.name} src={serie.poster_path} date={serie.first_air_date} />
                ))}
            </div >
        </>
    )
}

export default SeriesList