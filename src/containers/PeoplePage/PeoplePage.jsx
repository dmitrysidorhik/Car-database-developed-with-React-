import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constans/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';



import styles from "./PeoplePage.module.css";

const PeoplePage = () => {

  const [people, setPeople] = useState(null);
  const [errorApi, setErrorApi] = useState(false);

  const getResource = async (url) => {
    const res = await getApiResource(1 + url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img
        }
      })
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }


  }
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
      {errorApi
        ? <h2 style={{ padding: "10px 20px", textAlign: "center", color: 'red' }}>Error</h2>
        :
        (
          <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people} />}
          </>
        )
      }
    </>
  );
};

export default PeoplePage;

