import { language } from "./const";
import { SeriesListRequest } from "./interfaces";

async function getSeries(typeList: string): Promise<SeriesListRequest[]> {
  const key = import.meta.env.VITE_TMDB_API_KEY;
  const url = import.meta.env.VITE_TMDB_BASE_URL;

  try {
    const basicUrl = `${url}/tv/${typeList}`;

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
  }
}

export { getSeries };
