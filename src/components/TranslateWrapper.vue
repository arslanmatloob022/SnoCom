<template>
  <component 
    :is="tag" 
    :class="[className, { 'rtl-text': $isRTL }]"
    :dir="$direction"
  >
    {{ translatedText }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  text?: string
  translationKey?: string
  tag?: string
  className?: string
  fallback?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  className: '',
  fallback: ''
})

const { t, locale } = useI18n()

const translatedText = computed(() => {
  if (props.translationKey) {
    try {
      const translated = t(props.translationKey)
      return translated !== props.translationKey ? translated : (props.fallback || props.text || props.translationKey)
    } catch {
      return props.fallback || props.text || props.translationKey
    }
  }
  return props.text || ''
})

const $isRTL = computed(() => locale.value === 'ar')
const $direction = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
</script>

<style scoped>
.rtl-text {
  text-align: right;
  direction: rtl;
}
</style>