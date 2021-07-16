import axios from "axios";


// const baseUrl = `https://social-network.samuraijs.com/api/1.0/`


const instance = axios.create({
   withCredentials:true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      'API-KEY': '98e50b91-2dd1-49a4-9584-a347d63809c1'
   }
})


export const usersAPI = {
   getUsers: (currentPage:number, pageSize:number) => {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(res => res.data)
   },
   follow: (userId:number) => {
      return instance.post(
          `follow/${userId}`,
      )
   },
   unfollow: (userId:number) => {
      return  instance.delete(`follow/${userId}`)
   },

}

// export const getUsers = (currentPage:number, pageSize:number) => {
//    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//        .then(res => res.data)
// }
// export const followUser = (userId:number) => {
//    return instance.post(
//        `follow/${userId}`,
//        {},
//        {
//           withCredentials: true,
//           headers: {
//              'API-KEY': '98e50b91-2dd1-49a4-9584-a347d63809c1'
//           }
//        }
//    )
// }
// export const unfollowUser = (userId:number) => {
//    return  instance.delete(
//        `follow/${userId}`,
//        {
//           withCredentials: true,
//           headers: {
//              'API-KEY': '98e50b91-2dd1-49a4-9584-a347d63809c1'
//           }
//        }
//    )
// }


