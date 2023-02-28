import api from 'zmp-sdk';

const getUserInfo = async () => {
  try {
    const { userInfo } = await api.getUserInfo({});
    console.log(userInfo);
    return userInfo;
  } catch (error) {
    // xử lý khi gọi api thất bại
    return {};
    console.log(error);
  }
};

export default getUserInfo;