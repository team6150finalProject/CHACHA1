import ajax from "./ajax";

export const reqLogin =(user) => ajax('/signin', user, 'POST')
export const reqRegister =(user) =>ajax('/signup',user,'POST')
export const reqProfile =(user) =>ajax('/profile',user,'POST')