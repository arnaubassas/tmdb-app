import { language } from "./const";
import { CastRequest, DetailRequest, SeriesListRequest } from "./interfaces";
const key = import.meta.env.VITE_TMDB_API_KEY;
const url = import.meta.env.VITE_TMDB_BASE_URL;

export type SeriesType =
  | "airing_today"
  | "on_the_air"
  | "popular"
  | "top_rated";

async function getSeries(
  list: SeriesType,
  page: string
): Promise<SeriesListRequest[]> {
  try {
    const basicUrl = `${url}/tv/${list}`;

    const params = new URLSearchParams({
      page: page,
      language: language,
      api_key: key,
    });

    const completeUrl = `${basicUrl}?${params.toString()}`;
    const response = await fetch(completeUrl);
    const data = await response.json();
    return data.results;
  } catch (e: unknown) {
    console.log(e);
    throw e;
  }
}

async function getSearch(query: string): Promise<SeriesListRequest[]> {
  try {
    const basicUrl = `${url}/search/tv`;

    const params = new URLSearchParams({
      query: query,
      language: language,
      api_key: key,
    });

    const completeUrl = `${basicUrl}?${params.toString()}`;
    const response = await fetch(completeUrl);
    const data = await response.json();
    return data.results;
  } catch (e: unknown) {
    console.log(e);
    throw e;
  }
}

async function getSerieById(id: string): Promise<DetailRequest> {
  try {
    const basicUrl = `${url}/tv/${id}`;
    const params = new URLSearchParams({
      language: language,
      api_key: key,
    });

    const completeUrl = `${basicUrl}?${params.toString()}`;
    const response = await fetch(completeUrl);
    const data = await response.json();
    return data;
  } catch (e: unknown) {
    console.log(e);
    throw e;
  }
}

async function getSimilarById(id: number): Promise<SeriesListRequest[]> {
  try {
    const basicUrl = `${url}/tv/${id}/similar`;
    const params = new URLSearchParams({
      language: language,
      api_key: key,
    });

    const completeUrl = `${basicUrl}?${params.toString()}`;
    const response = await fetch(completeUrl);
    const data = await response.json();
    return data.results;
  } catch (e: unknown) {
    console.log(e);
    throw e;
  }
}

async function getCastById(id: number): Promise<CastRequest[]> {
  try {
    const basicUrl = `${url}/tv/${id}/aggregate_credits`;
    const params = new URLSearchParams({
      language: language,
      api_key: key,
    });

    const completeUrl = `${basicUrl}?${params.toString()}`;
    const response = await fetch(completeUrl);
    const data = await response.json();
    return data.cast;
  } catch (e: unknown) {
    console.log(e);
    throw e;
  }
}

export { getSeries, getSerieById, getSimilarById, getCastById, getSearch };
