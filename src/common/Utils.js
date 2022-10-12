import {Alert} from 'react-native';

export const getDataFrom = resposne => {
  // parse server response here
  const {data} = resposne;
  console.log("response", resposne);
  // add check for other status code, if there are any
  if (data?.code == 200 || data?.status == 200) {
    return data;
  } else {
    Alert.alert(
      'Message',
      data.message || 'Invalid response from server, please try again',
    );
    return undefined;
  }
};

export const handleError = error => {
  console.log("error", error);
  // check error & display msg accordingly
  const {resposne} = error;
  Alert.alert('Message', resposne?.message || 'Unable to connect with server');
};
