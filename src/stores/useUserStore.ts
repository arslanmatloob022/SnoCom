import api from '@/api'
import type { User, UserInfo } from '@/types'

export const useUserStore = defineStore('user', () => {

  let default_user = {
      'email':"adnan@arez.io",
      'username': "adnan",
      bio:"saf",
      token:'static-token'
    }


  const userInfo = ref<UserInfo | null>(null)
  // userInfo.value = default_user
  const isLoggedIn = computed(() => userInfo.value !== null)
  const updateUserInfo = (user: UserInfo) => {
    userInfo.value = user

  //    email: string
  // token?: string
  // username: string
  // bio: string
  // image: string
  // password?: string
    // localStorage.setItem('jwt-token', user.token!)
  }
  const handleAuthAction = async (type: string, formStore: { user: User }) => {

    console.log("form data", formStore)
    
    const data = type === 'register' ? await api.register(formStore) : await api.login(formStore)
    console.log("data", data)
    localStorage.setItem('jwt-token', data)
    // updateUserInfo(user)
  }
  const getUserInfo = async () => {
    // const { user } = await api.getUserInfo()
    

    updateUserInfo(default_user)
  }

  return { userInfo, isLoggedIn, handleAuthAction, getUserInfo }
})
