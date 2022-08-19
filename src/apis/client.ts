import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://3.22.172.144:8080/api/v1',
  withCredentials: true,
});

const request = async ({
  method,
  url,
  params,
  body,
}: {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  params?: {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: {};
}) => {
  const token = localStorage.getItem('token');
  try {
    if(token){
      client.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    const { data } = await client({
      url: url,
      method: method,
      params: params,
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
export default request;
