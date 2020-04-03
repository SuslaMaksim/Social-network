
import axios from "axios";
import {profileUserType} from "../reducer/types/types";


const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "48c1155c-0830-4f45-b50b-20872b17e269"
  }
})


export const usersAPI = {

  getUsers(page:number,pageSize:number){
       return  instanse.get(`users?page=${page}&count=${pageSize}`)
               .then(response => response.data)
  },

  followUsers(id:number){
       return  instanse.post(`follow/${id}`)
               .then(response => response.data)
  } ,

   unFollowUsers(id:number){
       return  instanse.delete(`follow/${id}`)
               .then(response => response.data)
  },
  
  getProfile(id:number){
    console.warn("Obsolete Method, Please profileAPI object")
      return profileAPI.getProfile(id);
                
  }

}

export const profileAPI = {

  getProfile(id:number){
      return instanse.get(`profile/${id}`)
                .then (response => response.data)
                
  },

  getStatus(id:number){
    return instanse.get(`profile/status/${id}`)
                .then(response => response.data)
  },

  setStatus(status:string){
    return instanse.put(`profile/status`, {status})
                .then(response => response.data)
  },

   savePhoto(photo:any){

    const formData = new FormData();
    formData.append('image',photo);

    return instanse.put(`profile/photo`, formData,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
    })
                .then(response => response.data)
  },
  saveDataUser(profile:profileUserType){
      return instanse.put(`profile`, profile)
                .then(response => response.data)
  }


}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodesEnumFoCaptcha {
    CaptchaIsRequired = 10
}

type meResponseType = {
    data: {id: number, email: string, login: string }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {userId: number}
    resultCode: ResultCodesEnum | ResultCodesEnumFoCaptcha
    messages: Array<string>
}

export const auth = {

    me(){
    return instanse.get<meResponseType>(`auth/me`)
                .then(response => response.data)
  },


  login(email:string,password:string,rememberMe = false,captcha: null | string = null){
       return instanse.post<LoginResponseType>(`auth/login`, {email,password,rememberMe,captcha})
               

  },
  logout(){
       return instanse.delete(`auth/login`);
  },
  getCaptcha(){
       return instanse.get(`security/get-captcha-url`)

  }

}

