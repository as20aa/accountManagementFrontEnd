import request from '@/utils/request'
import type { Response } from '@/utils/response'

//export interace AccountVO {}

export type AccountVO = {// interface define the shape of object, but type can implement more complex object
    userId: string
    userName: string
    pwd: string
    phone: string//there is a little difference when declear a type with type and interface
    email: string
    roleId: string
    indStatus: string
}
export async function login(data: AccountVO) {
    return request.post<Response<AccountVO>>(
        '/login',
        data// data will automatically convert to json
    )
}

export function logout(data: Object) {
    return request.post<Response<Object>>(
        '/logout',
        data
    )
}