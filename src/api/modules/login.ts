import request from '@/utils/axios';

export interface IloginForm {
  username: string;
  password: string;
}
export const login = (data: IloginForm) => {
  return request({
    url: '/api/auto/login',
    method: 'post',
    data
  })
}