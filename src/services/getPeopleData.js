import { HTTP, SWAPI_ROOT, SWAPI_PEOPLE, HTTPS } from "../constans/api";

const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
  return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);