<template>
  <div class="Search_wrapper___mZGv">
    <form class="Search_searchWrapper__Fa_4X">
      <div class="SearchSelector_wrapper__P_w2s">
        <div class="SearchSelector_selector__GrY8V">
          <p class="Typography_p8__bwpG6 SearchSelector_label__BV9nQ">Market</p>
          <span class="Icon_iconWrapper SearchSelector_chevronDown__fqC8x">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon__CTVm1">
              <path d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z" fill="currentColor"></path>
            </svg>
          </span>
        </div>
      </div>
      <div class="Autocomplete_wrapper__95FTv">
        <span class="Icon_iconWrapper Autocomplete_searchIcon__1Pjrc Autocomplete_smallIcon__3ld_I Search_searchIcon__4o9Ok">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon__CTVm1">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9 .75a8.25 8.25 0 1 0 4.883 14.9l3.467 3.468 1.768-1.768-3.467-3.467A8.25 8.25 0 0 0 9 .75ZM3.25 9a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
              fill="currentColor"></path>
          </svg>
        </span>
        <input v-model="searchQuery" class="Autocomplete_input__35ZrS Autocomplete_small Search_input__djH_7"
          placeholder="Search for stores and products" autoComplete="off" type="search" name="search" />
        <div class="Autocomplete_rightSection__jcK3F">
          <button class="SearchButton_button__9CvEJ" @click.prevent="handleSearch">
            <span class="Icon_iconWrapper SearchButton_searchIcon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon__CTVm1">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9 .75a8.25 8.25 0 1 0 4.883 14.9l3.467 3.468 1.768-1.768-3.467-3.467A8.25 8.25 0 0 0 9 .75ZM3.25 9a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
                  fill="currentColor"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery)
    }
  }
}
</script>