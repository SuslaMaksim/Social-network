
import * as axios from "axios";


const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "48c1155c-0830-4f45-b50b-20872b17e269"
  }
})


export const usersAPI = {

  getUsers(page,pageSize){      
       return  instanse.get(`users?page=${page}&count=${pageSize}`)
               .then(response => response.data)
  },

  followUsers(id){      
       return  instanse.post(`follow/${id}`)
               .then(response => response.data)
  } ,

   unFollowUsers(id){      
       return  instanse.delete(`follow/${id}`)
               .then(response => response.data)
  },
  
  getProfile(id){
    console.warn("Obsolete Method, Please profileAPI object")
      return profileAPI.getProfile(id);
                
  }

}

export const profileAPI = {

  getProfile(id){
      return instanse.get(`profile/${id}`)
                .then (response => response.data)
                
  },

  getStatus(id){
    return instanse.get(`profile/status/${id}`)
                .then(response => response.data)
  },

  setStatus(status){
    return instanse.put(`profile/status`, {status})
                .then(response => response.data)
  },

   savePhoto(photo){

    const formData = new FormData();
    formData.append('image',photo);

    return instanse.put(`profile/photo`, formData,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
    })
                .then(response => response.data)
  },
  saveDataUser(file){
      return instanse.put(`profile`, file)
                .then(response => response.data)
  }


}



export const auth = {

    me(){
    return instanse.get(`auth/me`)
                .then(response => response.data)
  },


  login(email,password,rememberMe = false,captcha = null){
       return instanse.post(`auth/login`, {email,password,rememberMe,captcha})
               

  },
  logout(){

       return instanse.delete(`auth/login`);

  },
  getCaptcha(){
       return instanse.get(`security/get-captcha-url`)
               


  }


}