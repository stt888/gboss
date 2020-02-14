// include some functions correspond with the server api

import ajax from './ajax'

const proxyURL = "http://secret-depths-83858.herokuapp.com"
// request register
export const reqRegister = (user) => ajax(`${proxyURL}/register`, user, 'POST')

// request login
export const reqLogin = (user) => ajax(`${proxyURL}/login`, user, 'POST')

// update user's information
export const reqUpdateUser = (user) => ajax(`${proxyURL}/update`, user, 'POST')

// get user according to cookies
export const reqUser = () => ajax(`${proxyURL}/user`)

// get user list according to user type
export const reqUserList = (type) =>ajax(`${proxyURL}/list`, {type: type}, 'POST')

// get current user's all msg list
export const reqChatMsgList = () => ajax(`${proxyURL}/msglist`)

// get read msg information
export const reqReadChatMsg = (from) => ajax(`${proxyURL}/readmsg`, {from}, 'post')