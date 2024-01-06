import PropTypes from 'prop-types';
import cl from './PersonInfo.module.scss';

const PersonInfo = ({personInfo}) => {
  return (
    <div className={cl.wrapper}>
      <ul className={cl.list__container}>
          {personInfo.map(({title, data}) => 
            data && (
              <li className={cl.list__item} key={title}>
                <span className={cl.item__title}>{title}:</span> {data}
              </li>
            )
          )}
      </ul>
    </div>
  )
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
}

export default PersonInfo;