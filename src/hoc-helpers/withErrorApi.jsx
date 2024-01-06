import { useState } from "react";

import ErrorRequest from '../containers/ErrorPage/ErrorPage'

export const withErrorApi = View => {
  return props => {
    const [errorApi, setErrorApi] = useState(false);
    
    return (
      <>
        {
          errorApi ? 
          <ErrorRequest /> 
          : 
          <View setErrorApi={setErrorApi} {...props} />
        }
      </>
    )    
  }
}