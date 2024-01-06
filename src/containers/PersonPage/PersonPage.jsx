import PropTypes from 'prop-types';

import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';

import {withErrorApi} from '@hoc-helpers/withErrorApi';
import {getApiResourse} from '@utils/network';
import {getPeopleImage} from '@services/getPeopleData';
import {API_PERSON} from '@constants/api';

import cl from './PersonPage.module.scss';


const PersonPage = ({ setErrorApi }) => {

  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    (async () => {
      const id = params.id;
      
      const res = await getApiResourse(`${API_PERSON}/${id}/`)

      if (res) {
        setPersonInfo([
          { title: 'Name', data: res.name },
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ])
        
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        //res.films
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }

    })();
  }, [])

  return (
    <div className={cl.wrapper}>

      <span className={cl.backlink} onClick={() => navigate(-1)}>Go Back</span>
      <span className={cl.person__name}>{personName}</span>
      
      <div className={cl.person__info}>
          <PersonPhoto 
            personName={personName}
            personPhoto={personPhoto}
        
          />
        
        {personInfo && <PersonInfo personInfo={personInfo}/>}
      </div>
    </div>
  ) 
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);