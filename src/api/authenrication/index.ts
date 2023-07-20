import request from '@/utils/request'

//export interace AccountVO {}

export type AccountVO = {// interface define the shape of object, but type can implement more complex object
    phone: string,//there is a little difference when declear a type with type and interface
    pwd: string
}
export function login(data: AccountVO) {
    return request({
        url: '/login',
        method: 'post',
        data// data will automatically convert to json
    })
}

export function logout(data: JSON) {
    return request({
        url: '/logout',
        method: 'post',
        data
    })
}