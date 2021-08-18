import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;

export class HttpClient {
  constructor() {
    this.client = axios.create({ baseURL: serverUrl });
    this.client.interceptors.request.use(
      async config => {
        const token = await this.getToken();
        return {
          ...config,
          headers: {
            ...config.headers,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
      },
      error => {
        Promise.reject(error);
      }
    );
    return this;
  }

  setTokenGenerator(tokenGenerator) {
    this.tokenGenerator = tokenGenerator;
  }

  getToken() {
    return this.tokenGenerator();
  }
}

const httpClient = new HttpClient();

export default httpClient;

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     let res = error.response;
//     if (res.status == 401) {
//       window.location.href = “https://example.com/login”;
//     }
//     console.error(“Looks like there was a problem. Status Code: “ + res.status);
//     return Promise.reject(error);
//   }
// );
