const getEventInfo = () :Promise<any> => {
  return new Promise(r => r({ eventTitle: 'Đơn vị truyền thông', description: 'Phóng viên báo Zing News' }));
  // return new Promise((resolve, reject) => setTimeout(reject, 100, 'failed reason'));
};

export default getEventInfo;