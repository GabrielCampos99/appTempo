import axios, { AxiosRequestConfig } from 'axios';

const apiUrl = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : null;

class ApiFactory {
  create() {

    if (!apiUrl) {
      throw new Error('REACT_APP_API_URL is not setup.');
    }

    let options: AxiosRequestConfig = {
      baseURL: apiUrl
    };
    return axios.create(options);
  }
}

export default new ApiFactory();