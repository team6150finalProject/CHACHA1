import ajax from "./ajax";

export const reqLogin =(user) => ajax('/signin', user, 'POST')
export const reqRegister =(user) =>ajax('/signup',user,'POST')
export const reqUpdateProfile =(user) =>ajax('/updateprofile',user,'POST')
export const reqProfile =(user) =>ajax('/profile',user,'GET')