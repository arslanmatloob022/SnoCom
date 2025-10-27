import api from '@/api'

export const UsePannelsStore = defineStore('pannel', () => {
  const cartModalOpen = ref(false)
  const loginModalOpen = ref(false)
  const profileModalOpen = ref(false)

    const setCartModal = (value:boolean)=>{

        console.log("setting value")
        cartModalOpen.value = value
    }
    const setLoginModal = (value:boolean)=>{

        console.log("setting value")
        loginModalOpen.value = value
    }
  return { cartModalOpen, setCartModal, loginModalOpen, setLoginModal, profileModalOpen }
})