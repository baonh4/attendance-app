import api from 'zmp-sdk';
const getUserLocationByToken = async (token) => {
  // gọi API Server của bạn để truy xuất thông tin từ token và user access token
};
const getLocation = () => {
  api.getLocation({
    success: async (data) => {
      // xử lý khi gọi api thành công
      let { token, latitude, longitude } = data;
      console.log(data);
      // xử lý cho trường hợp sử dụng phiên bản Zalo mới
      // if (token) {
      //   const response: any = await getUserLocationByToken(token);
      //   latitude = response.latitude;
      //   longitude = response.longitude;
      // }
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  });
}

export default getLocation;