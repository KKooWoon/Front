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
  header,
}: {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  params?: {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  header?: {};
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
      headers:header
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
export default request;
