import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constans/api'
import { getPeopleId } from '../../services/getPeopleData';

import styles from "./PeoplePage.module.css";

const PeoplePage = () => {

  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      console.log(id);
      return {
        name,
        url
      }
    })
    console.log(peopleList);
    setPeople(peopleList);
  }
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
      {people && (
        <ul>
          {people.map(({ name, url }) =>
            <li key={name}>
              {name}
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default PeoplePage;

