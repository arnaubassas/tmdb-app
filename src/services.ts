import { language } from "./const";
import {  DetailRequest, SeriesListRequest } from "./interfaces";
const key = import.meta.env.VITE_TMDB_API_KEY;
const url = import.meta.env.VITE_TMDB_BASE_URL;

async function getSeries(): Promise<SeriesListRequest[]> {
  

  try {
    const basicUrl = `${url}/tv/popular`;

    const params = new URLSearchParams({
      page: "1",
      language: language,
      api_key: key,
    });

    const completeUrl = `${basicUrl}?${params.toString()}`;
    const response = await fetch(completeUrl);
    const data = await response.json();
    return data.results;
    
  } catch (e: any) {
    console.log(e);
    throw e
  }
}

async function getSerieById(id:string): Promise<DetailRequest> {

    try {
        const basicUrl = `${url}/tv/${id}`;
        const params = new URLSearchParams({
            language: language,
            api_key: key,
          });
          
        const completeUrl = `${basicUrl}?${params.toString()}`;
        const response = await fetch(completeUrl);
        const data = await response.json();
        return data
    } catch (e: any) {
        console.log(e);
        throw e
      }
}


export { getSeries, getSerieById  };
