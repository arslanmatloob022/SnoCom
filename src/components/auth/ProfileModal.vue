<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { UsePannelsStore } from '@/stores/UsePannelsStore'
import { useUserStore } from '@/stores/useUserStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const popupProfileRef = ref<HTMLElement | null>(null)
const pannel = UsePannelsStore()
const userSession = useUserStore()

const timerInterval = ref<number | null>(null)
let firstTime = true

function handleClickOutside(event: MouseEvent) {
    console.log("clicked outside")
    if (popupProfileRef.value && !popupProfileRef.value.contains(event.target as Node)) {
        console.log("closing modal")
        if (pannel.profileModalOpen && !firstTime) {
            console.log("modal was open, closing now")
            firstTime = false
            pannel.profileModalOpen = false
        }
    }
}






onMounted(() => {
    document.addEventListener("click", handleClickOutside)
    console.log("store modal", pannel.profileModalOpen)
})

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside)
    if (timerInterval.value) {
        clearInterval(timerInterval.value)
    }
})
</script>

<template>
    <div id="modal-root">
        <div style="display: block;">
            <div class="Modal_fade">
                <div class="modal Modal_modalBody">
                    <div id="modalContent" ref="popupProfileRef"
                        class="Modal_modalContent Modal_drawer AccountModal_modalContent">
                        <div class="AccountModal_avatar">
                            <div>f</div>
                        </div>
                        <form class="AccountModal_form">
                            <div class="Input_input">
                                <div class="Input_label Input_active">Name</div>
                                <div class="Input_elementWrapper"><input class="Input_element"
                                        data-test-id="nameInput" type="text" value="farhan" name="name"></div>
                            </div>
                            <div data-analytic-label="disabledEmail" data-analytic-element-location="account_popup"
                                class="AccountModal_email">
                                <div class="Input_input Input_disabled">
                                    <div class="Input_label Input_active">E-mail</div>
                                    <div class="Input_elementWrapper"><input disabled=""
                                            class="Input_element" data-test-id="emailField" type="text"
                                            value="farhanbashir06@gmail.com" name="email"></div>
                                </div>
                            </div>
                            <div class="AccountModal_phone">
                                <div data-analytic-label="internationalPhone"
                                    data-analytic-element-location="account_popup">
                                    <div class="Input_input">
                                        <div class="Input_label Input_active Input_ignoreRtl__mB_4w">Phone
                                        </div>
                                        <div class="Input_elementWrapper"><input class="Input_element"
                                                data-test-id="phoneField" type="tel" value="+97335409342" name="phone">
                                        </div>
                                    </div>
                                  
                                </div>
                                <p class="Typography_p9 AccountModal_changePhoneInfo__lF_f8">Change to a Qatari
                                    number to unlock your account</p>
                            </div>
                            <p class="Typography_p9 AccountModal_info">Communications and transaction
                                history from Snoonu
                                will be send to the verified email address</p><button
                                @click="pannel.profileModalOpen = false"
                                class="Button_button Button_primary Button_wide"
                                data-test-id="saveAccountBtn"  data-analytic-label="saveAccount"
                                data-analytic-element-location="account_popup"><span
                                    class="Button_content">Save</span></button><button
                                class="Button_button Button_text Button_wide"
                                data-analytic-label="deleteAccount" data-analytic-element-location="account_popup"><span
                                    class="Button_content">Delete account</span></button>
                        </form><span data-test-id="crossIconBtn" class="Icon_iconWrapper Modal_cross" @click="pannel.profileModalOpen = false" ><svg
                                width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="Icon_icon">
                                <rect width="28" height="28" rx="14" fill="#F5F5F5"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.456 14 20.4 9.056 18.943 7.6 14 12.543 9.056 7.6 7.6 9.056 12.543 14 7.6 18.943 9.056 20.4 14 15.456l4.943 4.944 1.457-1.457L15.456 14Z"
                                    fill="#8C8C8D"></path>
                            </svg></span>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>