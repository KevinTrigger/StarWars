import PropTypes from 'prop-types';
import cl from './PersonPhoto.module.scss';

const PersonPhoto = ({personPhoto, personName}) => {
  return (
    <div className={cl.container}>
      <img className={cl.photo} src={personPhoto} alt={personName}/>
    </div>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,

}

export default PersonPhoto;