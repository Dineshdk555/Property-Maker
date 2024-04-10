import { del, get, post, put } from "./api_helper"
import { SERVER_URL } from "./configuration"
const BASE_URL = `${SERVER_URL}/api`

const userRegisteration = payload => post(`${BASE_URL}/user/register`, payload)

export{
    userRegisteration
}