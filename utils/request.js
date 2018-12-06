import { Alert } from 'react-native';
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PATCH' || newOptions.method === 'DELETE') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  // console.log(`${globalUrl}${url}`)
  // console.log(newOptions);
  return fetch(url, newOptions)
    // .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        Alert.alert({
          message: error.name,
          description: error.message,
        });
      }
      return
      if ('stack' in error && 'message' in error) {
        Alert.alert({
          message: `请求错误: ${url}`,
          description: error.message,
        });
      }
      return error;
    });
}
