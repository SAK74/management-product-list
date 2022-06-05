import axios, { AxiosRequestConfig } from "axios";

const defaultConfig: AxiosRequestConfig = {
   url: "https://reqres.in/api/products"
}
interface UserParam {
   id: number,
   page: number,
   per_page: number
}

export default function getData<T>(params?: Partial<UserParam>): Promise<T> {
   if (params) {
      defaultConfig.params = params;
   }
   return axios(defaultConfig)
      .then(resp => resp.data.data)
      .catch((err: Error) => {
         throw new Error(err.message);
      });
}