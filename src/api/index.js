import Constants from '../common/Constants';
import axios from 'axios'
class Api {
  constructor(session, dispatch) {
    this.api = this.init(session);

    /*
        this.api?.interceptors.response.use(
            response => {
                return response;
            },
            async function (error) {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    console.log('token-expired', session);
                    console.log('original-request', originalRequest);
                    originalRequest._retry = true;

                    const authDetails = new URLSearchParams();
                    authDetails.append('UserID', session.UserID);
                    authDetails.append('MobileNumber', session.MobileNumber);
                    authDetails.append('AuthCode', session.AuthToken);
                    const token = await getFcmToken();
                    authDetails.append('FCMToken', token);

                    const authResp = await axios.post(
                        `${BASE_URL}/FancyDateUAT/API/User/UserGenerateToken`,
                        authDetails,
                        {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        },
                    );
                    console.log('new-token', authResp);
                    const respData = getDataFrom(authResp);
                    const { data } = respData;

                    if (dispatch) {
                        data.MobileNumber = session.MobileNumber;
                        data.AuthToken = session.AuthToken;
                        data.UserID = session.UserID;
                        // update store
                        dispatch(saveSession(data));
                    }
                    axios.defaults.headers.common['Authorization'] =
                        'Bearer ' + data?.access_token;
                    axios.defaults.headers.common['Content-Type'] =
                        'application/x-www-form-urlencoded';

                    originalRequest.headers.Authorization =
                        'Bearer ' + data?.access_token;
                    return axios(originalRequest);
                }
                // if(originalRequest._retry){
                // }
                return Promise.reject(error);
            },
        );*/
  }

  init(session) {
    // console.log('session', session);

    return axios.create({
      baseURL: `${Constants.BASE_URL}/api`,
      headers: {
        Authorization: session?.token,
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // timeout: 2000,
    });
  }

  async login(data) {
    return this.api.post('/auth', data);
  }

  async getServices() {
    return this.api.get('/services');
  }
  async addUser(data) {
    return this.api.post('/user', data);
  }

  async addPet(data) {
    return this.api.post('/products', data);
  }


}

export default Api;
