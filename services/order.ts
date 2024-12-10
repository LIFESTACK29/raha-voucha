/* eslint-disable @typescript-eslint/no-explicit-any */
import { Axios } from "@/helpers/axiosHelper";

let status: number;
let message: string;

export const addOrder = async (payload: any) => {
  try {
    const response = await Axios({
      url: `${process.env.NEXT_PUBLIC_API_LINK}`,
      method: "post",
      body: payload,
    });

    status = 200;
    message = response.message;
  } catch (err: any) {
    status = err.response.status;
    message = err.response.data.message;
  }
  return { status, message };
};
