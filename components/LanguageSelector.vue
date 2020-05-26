<template>
  <div class="LanguageSelector">
    <div class="LanguageSelector-Background" />
    <select
      id="LanguageSelector"
      v-model="currentLocaleCode"
      class="LanguageSelector-Menu"
      @change="handleChangeLanguage"
    >
      <option
        v-for="locale in $root.$i18n.locales"
        :key="locale.code"
        :value="locale.code"
        :title="'Switch to ' + locale.name"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type LocaleCode = {
  currentLocaleCode: string
}

export default Vue.extend({
  components: {},
  data(): LocaleCode {
    return {
      currentLocaleCode: this.$root.$i18n.locale
    }
  },
  methods: {
    handleChangeLanguage() {
      this.$root.$i18n.setLocale(this.currentLocaleCode)
    }
  }
})
</script>

<style lang="scss" scoped>
.LanguageSelector {
  position: relative;
  margin: 8px 20px;
}

.LanguageSelector-Background {
  display: flex;
  align-items: center;
  padding: 0 6px;
  border-radius: 4px;
  height: 28px;

  &::before {
    content: 'Lang:';
    margin-left: 4px;
    color: $gray-1;
    font-size: 12px;
  }
}

.LanguageSelector-Menu {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  &::-ms-expand {
    display: none;
  }

  border: 1px solid $gray-4;

  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 60px;
  width: 100%;
  height: 28px;
  font-size: 12px;
  line-height: 28px;

  &:focus {
    border: 1px dotted $gray-3;
    outline: none;
  }
}
</style>
