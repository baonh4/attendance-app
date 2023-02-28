import api from 'zmp-sdk';

const getAccessToken = async () => {
  try {
    const accessToken = await api.getAccessToken({});
    console.log(accessToken);
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
}

export default getAccessToken;