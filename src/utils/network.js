const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";

export const getApiResource = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((body) => console.log(body))
    .catch(error=> console.log(error.message))
};

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
