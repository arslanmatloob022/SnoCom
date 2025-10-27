<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { UsePannelsStore } from '@/stores/UsePannelsStore'
import { useUserStore } from '@/stores/useUserStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const popupRef = ref<HTMLElement | null>(null)
const pannel = UsePannelsStore()
const userSession = useUserStore()
const showCountryCodeSelector = ref(false)
const otpModalOpen = ref(false)
const phoneNumber = ref('')
const pinCode = ref('')
const searchQuery = ref('')
const selectedCountry = ref('BH')
const otpTimer = ref(60)
const timerInterval = ref<number | null>(null)

// Country codes data
const countries = ref([
    { code: 'QA', name: 'Qatar', dialCode: '+974', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/c0562d78-e29b-40d2-a003-a9c6839f967d_QA.png' },
    { code: 'AR', name: 'Argentina', dialCode: '+54', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/262fb7de-55e1-48e6-b817-ce95a580527f_AR.png' },
    { code: 'AU', name: 'Australia', dialCode: '+61', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/f540f608-b9d0-4dfd-bcca-f801e71361bb_AU.png' },
    { code: 'AT', name: 'Austria', dialCode: '+43', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/18a51baf-3a04-464d-a57a-a525b7dc7fbd_AT.png' },
    { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/b256ddec-57f0-4175-996b-e62bff8f7b02_BH.png' },
    { code: 'BE', name: 'Belgium', dialCode: '+32', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/7e06c071-06b0-4b48-8072-34d1af79b689_BE.png' },
    { code: 'BR', name: 'Brazil', dialCode: '+55', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/f30aed31-c3a4-4ac6-a5c7-5dbd3f7c1e66_BR.png' },
    { code: 'CL', name: 'Chile', dialCode: '+56', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/2627144d-3393-4ea2-a51a-692dbbc9eb97_CL.png' },
    { code: 'CO', name: 'Colombia', dialCode: '+57', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/624c6305-e944-4416-b6ba-3b899b774a6b_CO.png' },
    { code: 'CY', name: 'Cyprus', dialCode: '+357', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/0600744d-81b6-481f-825c-f8c28285eb84_CY.png' },
    { code: 'DK', name: 'Denmark', dialCode: '+45', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/41c67f4a-130c-4228-8f71-9fbfb72d311b_DK.png' },
    { code: 'EE', name: 'Estonia', dialCode: '+372', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/2453d13e-9692-47a6-ae93-32743dbf0ee6_EE.png' },
    { code: 'FI', name: 'Finland', dialCode: '+358', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/b9988739-7466-411f-9c74-f99cffd85360_FI.png' },
    { code: 'FR', name: 'France', dialCode: '+33', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/19c4a88c-fafc-4d03-82b0-9a7de2724366_FR.png' },
    { code: 'GE', name: 'Georgia', dialCode: '+995', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/d0ffaaf2-7747-486c-91f4-8a08b4cb59b4_GE.png' },
    { code: 'DE', name: 'Germany', dialCode: '+49', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/1490e7ae-b824-4196-880c-a2b980750dbd_DE.png' },
    { code: 'GR', name: 'Greece', dialCode: '+30', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/f3a227ed-cdc6-43ce-9518-675ca44360bc_GR.png' },
    { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/f2374301-798e-48d9-978b-c833d1a00eb5_HK.png' },
    { code: 'HU', name: 'Hungary', dialCode: '+36', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/a3ed2523-bb7c-4df5-aefb-df693bb04936_HU.png' },
    { code: 'IE', name: 'Ireland', dialCode: '+353', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/33d47222-7588-4282-b52e-c14854235c96_IE.png' },
    { code: 'IT', name: 'Italy', dialCode: '+39', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/659a6367-5784-4382-be74-e26fbefe0ce5_IT.png' },
    { code: 'JP', name: 'Japan', dialCode: '+81', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/0c030658-e7f5-449e-96fa-d8b0b326d361_JP.png' },
    { code: 'JO', name: 'Jordan', dialCode: '+962', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/a1de61b2-d3e4-44d7-95f2-006cbd4a6fb4_JO.png' },
    { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/ff6a0969-4ce1-4e48-b3a6-0e43a364aee3_KZ.png' },
    { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/94e4cb31-e3c4-4986-bd8e-451fcbbc25b6_KW.png' },
    { code: 'LV', name: 'Latvia', dialCode: '+371', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/19a6315c-2558-4f2c-8ca8-9b7126ae6006_LV.png' },
    { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/4dcc920e-0b3e-4616-80f8-77e71dc0cb91_LB.png' },
    { code: 'LI', name: 'Liechtenstein', dialCode: '+423', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/61055e1a-f0eb-4bdd-80e3-3166ac527587_LI.png' },
    { code: 'LT', name: 'Lithuania', dialCode: '+370', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/b5cdaae7-8432-4561-801e-8b04ceb62c5d_LT.png' },
    { code: 'LU', name: 'Luxembourg', dialCode: '+352', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/53404d6c-2e1d-4e49-9462-d659e3c41773_LU.png' },
    { code: 'MO', name: 'Macao', dialCode: '+853', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/73c5ce43-131e-413d-beab-e72ecb4281d5_MO.png' },
    { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/38e9c31e-980b-40a3-a726-0e28a4517a18_MY.png' },
    { code: 'MT', name: 'Malta', dialCode: '+356', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/65e7a620-46f5-406b-815a-e05cfd18da81_MT.png' },
    { code: 'MX', name: 'Mexico', dialCode: '+52', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/6f8758e5-0ac4-4f3e-a97e-f350a17bfc29_MX.png' },
    { code: 'MD', name: 'Moldova', dialCode: '+373', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/f8cee2a5-96c6-4372-bfc4-b7dc84c54f52_MD.png' },
    { code: 'MC', name: 'Monaco', dialCode: '+377', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/4253738f-76c9-458a-9463-9457a1153ce0_MC.png' },
    { code: 'ME', name: 'Montenegro', dialCode: '+382', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/dc14b3f7-42ef-4dab-8655-b6de66ef01a2_ME.png' },
    { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/736ddd37-4bb4-4946-aa2c-3c7c4bdf8826_NL.png' },
    { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: 'https://images.snoonu.com/ContentManagementSystem/Countries/afe97e90-c55f-41f5-9736-1af24c09a1bb_NZ.png' }
])

const selectedCountryData = computed(() => {
    return countries.value.find(c => c.code === selectedCountry.value) || countries.value[4]
})

const filteredCountries = computed(() => {
    if (!searchQuery.value) return countries.value
    const query = searchQuery.value.toLowerCase()
    return countries.value.filter(country =>
        country.name.toLowerCase().includes(query) ||
        country.dialCode.includes(query)
    )
})

const formattedPhoneNumber = computed(() => {
    return `${selectedCountryData.value.dialCode} ${phoneNumber.value}`
})

const formattedTimer = computed(() => {
    const minutes = Math.floor(otpTimer.value / 60)
    const seconds = otpTimer.value % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

function handleClickOutside(event: MouseEvent) {
    console.log("clicked outside")
    if (popupRef.value && !popupRef.value.contains(event.target as Node)) {
        if (pannel.loginModalOpen) {
            pannel.setLoginModal(false)
        }
    }
}

function selectCountry(countryCode: string) {
    selectedCountry.value = countryCode
}

function handleContinue(event: Event) {
    event.preventDefault()
    if (phoneNumber.value) {
        otpModalOpen.value = true
        startTimer()
    }
}

function startTimer() {
    otpTimer.value = 60
    if (timerInterval.value) {
        clearInterval(timerInterval.value)
    }
    timerInterval.value = setInterval(() => {
        if(otpTimer.value <= 58) {
            userSession.getUserInfo()
            pannel.loginModalOpen = false
        }
        if (otpTimer.value > 0) {
            otpTimer.value--
        } else {
            if (timerInterval.value) {
                clearInterval(timerInterval.value)
            }
        }
    }, 1000)
}

function requestNewCode() {
    if (otpTimer.value === 0) {
        startTimer()
    }
}

function handlePinInput(event: Event) {
    const target = event.target as HTMLInputElement
    pinCode.value = target.value.replace(/[^\d]/g, '').slice(0, 6)
    target.value = '•'.repeat(pinCode.value.length)
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside)
    console.log("store modal", pannel.loginModalOpen)
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
                    <div id="modalContent" ref="popupRef" class="Modal_modalContent LoginModal_loginContent__WR7_g">
                        <div v-show="!showCountryCodeSelector && !otpModalOpen" style="    display: flex
;
    flex-direction: column;
    align-items: center;">
                            <img alt="login for discounts" loading="lazy" width="219" height="216" decoding="async"
                                data-nimg="1" src="https://snoonu.com/_next/static/media/login.c67441d3.png"
                                style="color: transparent;">
                            <div class="PhoneForm_text">
                                <h3 class="Typography_h3 PhoneForm_titleStep">Log in to see discounts</h3>
                                <p class="Typography_p6 PhoneForm_subTitle">Prices are lower if you are logged in</p>
                            </div>
                            <form class="PhoneForm_form" @submit="handleContinue">
                                <div class="Input_input PhoneForm_input">
                                    <div class="Input_elementWrapper">
                                        <div class="Input_addonBefore">
                                            <div class="CountryCodeSelector_wrapper"
                                                @click="showCountryCodeSelector = true">
                                                <div class="CountryCodeSelector_imageWrapper">
                                                    <img :alt="`flag of ${selectedCountryData.dialCode}`" loading="lazy"
                                                        decoding="async" data-nimg="fill"
                                                        :src="selectedCountryData.flag"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                                <p class="Typography_p4">{{ selectedCountryData.dialCode }}</p>
                                                <span data-test-id=""
                                                    class="Icon_iconWrapper CountryCodeSelector_chevronDown"
                                                    style="width: 20px; height: 20px;">
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path
                                                            d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
                                                            fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <input
                                            class="Input_element Input_isCentered Input_withAddonBefore Input_small___chAB PhoneForm_inputElement"
                                            placeholder="Mobile Number" data-test-id="phoneInputField" type="tel"
                                            v-model="phoneNumber" required name="phoneNumber">
                                    </div>
                                </div>
                                <button class="Button_button Button_primary Button_wide" data-test-id="btnContinueLogin"
                                    data-analytic-label="loginContinue" data-analytic-element-location="login_popup"
                                    type="submit">
                                    <span class="Button_content">Continue</span>
                                </button>
                            </form>
                            <div class="TermsBlock_terms">
                                <p class="Typography_p9">By clicking "Continue" you agree with our</p>
                                <a rel="noopener noreferrer" target="_blank" data-analytic-label="termsLink"
                                    data-analytic-element-location="login_popup" href="/terms">
                                    <p class="Typography_p9">terms and conditions</p>
                                </a>
                            </div>
                            <span data-test-id="crossIconBtn" class="Icon_iconWrapper Modal_cross"
                                @click="() => { pannel.setLoginModal(false) }">

                                <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    class="Icon_icon">
                                    <rect width="28" height="28" rx="14" fill="#F5F5F5"></rect>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.456 14 20.4 9.056 18.943 7.6 14 12.543 9.056 7.6 7.6 9.056 12.543 14 7.6 18.943 9.056 20.4 14 15.456l4.943 4.944 1.457-1.457L15.456 14Z"
                                        fill="#8C8C8D"></path>
                                </svg>
                            </span>
                        </div>

                        <form v-show="showCountryCodeSelector" class="CountryCodes_wrapper">
                            <div>
                                <div class="CountryCodes_backIconWrapper__8CSA_">
                                    <span data-test-id="" @click="showCountryCodeSelector = false"
                                        class="Icon_iconWrapper CountryCodes_backIcon">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            class="Icon_icon">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="m1 10 9.325-8L12 3.956 6.412 8.75H19v2.5H6.412L12 16.044 10.325 18 1 10Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                                <h3 class="Typography_h3 CountryCodes_title__RX_2K">Country code</h3>
                            </div>
                            <div class="Autocomplete_wrapper">
                                <span data-test-id="" class="Icon_iconWrapper Autocomplete_searchIcon">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="Icon_icon">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9 .75a8.25 8.25 0 1 0 4.883 14.9l3.467 3.468 1.768-1.768-3.467-3.467A8.25 8.25 0 0 0 9 .75ZM3.25 9a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                                <input data-test-id="" class="Autocomplete_input CountryCodes_search"
                                    placeholder="Search by country or code" v-model="searchQuery" name="countrySearch">
                                <div class="Autocomplete_rightSection"></div>
                            </div>
                            <div data-test-id="country-codes-radio-group" role="radiogroup"
                                class="CountryCodes_list CountryCodes_withCountries">
                                <div v-for="country in filteredCountries" :key="country.code"
                                    class="CountryRadio_wrapper">
                                    <label :for="country.code" class="CountryRadio_label">
                                        <div class="CountryRadio_imageWrapper">
                                            <img :alt="`flag of ${country.name}`" loading="lazy" decoding="async"
                                                data-nimg="fill" :src="country.flag"
                                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                        </div>
                                        <p class="Typography_p1 CountryRadio_code__a_jUh">{{ country.dialCode }}</p>
                                        <p class="Typography_p3__dH_h7">{{ country.name }}</p>
                                    </label>
                                    <div class="Radio_wrapper">
                                        <input :id="country.code" class="Radio_radio" type="radio" :value="country.code"
                                            v-model="selectedCountry" name="countryCode">
                                        <span class="Radio_icon"></span>
                                    </div>
                                </div>
                            </div>
                            <button class="Button_button Button_primary Button_wide CountryCodes_chooseButton"
                                @click="showCountryCodeSelector = false" type="button"
                                data-analytic-label="selectCountryCode">
                                <span class="Button_content">Choose</span>
                            </button>
                        </form>

                        <div v-show="otpModalOpen" class="">
                            <div class="Modal_imageWrapper" style="width: 100%;">
                                <span
                                    style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                    <span
                                        style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                                        <img alt="" aria-hidden="true"
                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2788%27%20height=%2788%27/%3e"
                                            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
                                    </span>
                                    <img alt="" decoding="async" data-nimg="intrinsic"
                                        src="https://snoonu.com/_next/static/media/snoonu_logo.820159a8.svg"
                                        style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;">
                                </span>
                            </div>
                            <h3 class="Typography_h3 PinForm_title">
                                Enter the 6 digit code sent to
                                <span>{{ formattedPhoneNumber }}</span>
                            </h3>
                            <form class="PinForm_form">
                                <div class="Input_input PinForm_centeredText">
                                    <div class="Input_elementWrapper">
                                        <input class="Input_element Input_isCentered" autocomplete="one-time-code"
                                            data-test-id="pinInputField" type="number" @input="handlePinInput"
                                            :value="'•'.repeat(pinCode.length)" name="pin">
                                    </div>
                                </div>
                            </form>
                            <button class="Button_button Button_secondary Button_small Button_wide PinForm_button"
                                :disabled="otpTimer > 0" @click="requestNewCode" data-analytic-label="requestNewCode"
                                data-analytic-element-location="login_popup" type="button">
                                <span class="Button_content">
                                    <span data-test-id="" class="Icon_iconWrapper Button_icon">
                                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            class="Icon_icon">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M16.5 10A6.5 6.5 0 1 1 10 3.5V11l4.054-6.081A6.488 6.488 0 0 1 16.5 10Zm2.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                fill="#8C8C8D"></path>
                                        </svg>
                                    </span>
                                    Request a new code in {{ formattedTimer }}
                                </span>
                            </button>
                            <span @click="otpModalOpen = false" data-test-id="backIconBtn"
                                class="Icon_iconWrapper Modal_back__Hfh_h">
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="m1 10 9.325-8L12 3.956 6.412 8.75H19v2.5H6.412L12 16.044 10.325 18 1 10Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            <span data-test-id="crossIconBtn" class="Icon_iconWrapper Modal_cross"
                                @click="() => { pannel.setLoginModal(false) }">
                                <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    class="Icon_icon">
                                    <rect width="28" height="28" rx="14" fill="#F5F5F5"></rect>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.456 14 20.4 9.056 18.943 7.6 14 12.543 9.056 7.6 7.6 9.056 12.543 14 7.6 18.943 9.056 20.4 14 15.456l4.943 4.944 1.457-1.457L15.456 14Z"
                                        fill="#8C8C8D"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>