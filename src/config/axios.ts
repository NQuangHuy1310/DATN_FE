/* eslint-disable indent */
import axios from 'axios'
import { toast } from 'react-toastify'

import { ApiStatusCode } from '../constants/enum'
import { MessageErrors } from '../constants/errorConstant'

const axiosConfig = axios.create({
    withCredentials: true,
    baseURL: ''
})

axiosConfig.interceptors.request.use(
    (config) => {
        // Todo: Khi login xong lưu token ở localStorage sau đó mỗi khi call api get token ở local vào headers qua Bearer

        return config
    },
    (error) => {
        // Xử lý lỗi yêu cầu
        toast.error(MessageErrors.genericError)
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response) => {
        if (response.status === ApiStatusCode.Success) {
            // Nếu 200 trả về data
            return response.data
        }
        return response
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case ApiStatusCode.NotFound:
                    toast.error(MessageErrors.notFound)
                    break
                case ApiStatusCode.Unauthorized:
                    toast.error(MessageErrors.unauthorizedAccess)
                    break
                case ApiStatusCode.InternalServerError:
                    toast.error(MessageErrors.serverError)
                    break
                default:
                    toast.error(MessageErrors.genericError)
                    break
            }
        } else {
            // Xử lý các lỗi không có phản hồi
            toast.error(MessageErrors.networkError)
        }
        return Promise.reject(error)
    }
)

export default axiosConfig
