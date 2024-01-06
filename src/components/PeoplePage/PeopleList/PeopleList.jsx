import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './PeopleList.module.scss';


const PeopleList = ({people}) => {

  return (
    <>
      <ul className={cl.list__container}>
      {people.map(({id, name, img, url}) => 
            <li className={cl.list__item} key={id}>
              <Link to={`/people/${id}`} href='#'>
                <img className={cl.person__avatar} src={img} alt="name" />
              </Link>
              <p>{name} </p>
            </li>
          )}
    </ul>
    </>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array,
}

export default PeopleList;
