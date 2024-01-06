import img from '@images/404.png'
import { useLocation } from 'react-router'

import cl from './ErrorPage.module.scss'

const ErrorPage = () => {

  let location = useLocation();

  return (
    <div className={cl.wrapper}>
        <img className={cl.image} src={img} alt="" />
        <p className={cl.support}>Request error <span className={cl.tag}>{location.pathname}</span></p>
    </div>
  )
}

export default ErrorPage