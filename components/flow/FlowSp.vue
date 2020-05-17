<template>
  <div>
    <h3 :class="['mb-4', $style.FlowCardHeading]">
      {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
    </h3>
    <div :class="$style.FlowCard">
      <flow-sp-past />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-general />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-elder />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-suspect />
    </div>
    <div :class="[$style.FlowCard, $style.FlowCardGrayBg]">
      <flow-sp-advisory />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-according />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-hospitalized />
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
import FlowSpPast from './FlowSpPast.vue'
import FlowSpGeneral from './FlowSpGeneral.vue'
import FlowSpElder from './FlowSpElder.vue'
import FlowSpSuspect from './FlowSpSuspect.vue'
import FlowSpAdvisory from './FlowSpAdvisory.vue'
import FlowSpAccording from './FlowSpAccording.vue'
import FlowSpHospitalized from './FlowSpHospitalized.vue'

export default {
  components: {
    FlowSpPast,
    FlowSpGeneral,
    FlowSpElder,
    FlowSpSuspect,
    FlowSpAdvisory,
    FlowSpAccording,
    FlowSpHospitalized
  },
  mounted() {
    const hash = this.$route.hash
    if (hash !== '') {
      VueScrollTo.scrollTo(hash, 1000, { offset: -72 })
    }
  }
}
</script>

<style module lang="scss">
.FlowCard {
  display: flex;
  flex-direction: column;

  @include card-container();

  padding: 20px;
  margin-bottom: 20px;
  word-break: break-word;
  hyphens: auto;

  &Heading {
    color: $gray-2;
    font-size: 1.5rem;
  }

  &GrayBg {
    background-color: $gray-5;
    box-shadow: none;
    border: none !important;
  }

  &Button {
    @include button-text('md');
    margin: 12px auto 0;
    @include font-size(20);
    width: 100%;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    color: $purple-1 !important;
    &:hover {
      color: $white !important;
    }

    &ExternalLinkIcon {
      margin-left: 2px;
      color: $purple-1 !important;
    }
  }
}
</style>
