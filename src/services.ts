import { SeriesListRequest } from "./interfaces";

async function getSeries(): Promise<SeriesListRequest[]> {

    try {
        const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=c6aeee577586ba38e487b74dfede5deb`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (e: any) {
        return e;
    }
}

export { getSeries }



