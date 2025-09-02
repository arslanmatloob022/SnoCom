import api from '@/api'


export const UsePannelsStore = defineStore('pannel', () => {
  const cartModalOpen = ref(false)

    const setCartModal = (value:boolean)=>{

        console.log("setting value")
        cartModalOpen.value = value
    }
  return { cartModalOpen, setCartModal }
})