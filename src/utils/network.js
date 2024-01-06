import { HTTP, HTTPS } from "@constants/api";


/*
* Change URL with 'HTTP' on 'HTTPS'
* @param {String} url - url for changing
* @returns {String} url - url with HTTPS protocol;
*
*/

export const changeHTTP = url => {
  const res = url ? url.replace(HTTP, HTTPS) : url;
  return res;
}




/*
* Make a request to the server using a parameter 'url'
* @param {String} url - server request address
* @returns {Promise} Promise with results request
*
*/

export const getApiResourse = async (url) => {
  try { 
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('error', res.status);
      return false;
    }
    return await response.json();
  }
  catch (error) {
    console.error('error', error.message)
    return false;
  }
}