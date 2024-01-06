import PropTypes from 'prop-types';
import cl from './PeopleNavigation.module.scss';

import { Link } from 'react-router-dom';
import UiButton from '@UI/UiButton';

const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {

  const handleChangeNext = () => getResourse(nextPage);

  const handleChangePrev = () => getResourse(prevPage);

  return (
    <div>
      <div className={cl.btnsWrapper}>
        <Link to={`/people/?page=${counterPage-1}`}>
            <UiButton
              text="Previous"
              onClick={handleChangePrev}
              disabled={!prevPage}
            />
        </Link>
        <Link to={`/people/?page=${counterPage+1}`}>
            <UiButton 
              text="Next"
              onClick={handleChangeNext}
              disabled={!nextPage}
            />
        </Link>
      </div>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResourse: PropTypes.func,
  prevPage: PropTypes.string, 
  nextPage: PropTypes.string,
  counterPage: PropTypes.number
}

export default PeopleNavigation;