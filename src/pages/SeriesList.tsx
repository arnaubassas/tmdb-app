import { useEffect, useState } from "react";
import { getSeries } from "../services";
import { seriesList } from "../interfaces";



const SeriesList = () => {

    const [series, setSeries] = useState<seriesList[]>();


    useEffect(() => {
        getSeries()
            .then((data) => {
                setSeries(data);
                console.log(data)
            })

    }, []);

    return (
        <>

        </>
    )
}

export default SeriesList