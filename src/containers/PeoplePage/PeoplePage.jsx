import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

import { withErrorApi } from "@hoc-helpers/withErrorApi"
import PeopleList from "@components/PeoplePage/PeopleList"
import PageLoader from "@components/PageLoader/PageLoader"
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";

import { getApiResourse, changeHTTP } from "@utils/network"
import { getPeopleId, getPeopleImage, getPeoplePageId } from "@services/getPeopleData"
import { API_PEOPLE } from "@constants/api"
import { useQueryParams } from "@hooks/useQueryParams.js"

import cl from './PeoplePage.module.scss';

const PeoplePage = ({setErrorApi}) => {
  
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');
  
  const getResourse = async (url) => {
  const answer = await getApiResourse(url);

    if (answer) {
      const peopleList = answer.results.map(({name, url}) => {
      const id = getPeopleId(url)
      const img = getPeopleImage(id)
      
      return {
        id,
        name,
        img
      }

    });

    setPeople(peopleList);
    setPrevPage(changeHTTP(answer.previous));
    setNextPage(changeHTTP(answer.next));
    setErrorApi(false);
    setCounterPage(getPeoplePageId(url));
  }
  else setErrorApi(true);
}

  useEffect(() => {
    getResourse(API_PEOPLE+queryPage);
  }, [])
  
  return (
    <div className={cl.wrapper}>
      {people ? 
        <div className={cl.widget}>
          <PeopleNavigation 
            getResourse={getResourse} 
            prevPage={prevPage} 
            nextPage={nextPage}
            counterPage={counterPage}
          />
          <PeopleList people={people} />
        </div>
      :
        <PageLoader />
      }
    </div>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
  counterPage: PropTypes.number,
}

export default withErrorApi(PeoplePage);