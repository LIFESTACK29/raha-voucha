import { Axios } from '@/helpers/axiosHelper';

let status: number;
let message: string;
let data: any;

export const addOrder = async (payload: any) => {
    try {
        const response = await Axios({
            url: '/',
            method: 'post',
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
