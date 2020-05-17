<template>
  <div :class="$style.container">
    <h4 :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <sentiment-icon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('不安に思う方') }}</span>
    </h4>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        {{ $t('微熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('軽い咳') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="$style.callcenter">
      <i18n tag="p" path="新型コロナウイルス{dial}" :class="$style.fzMedium">
        <template v-slot:dial>
          <span :class="[$style.fzLarge, $style.break]">
            {{ $t('感染症専用相談ダイヤル') }}
          </span>
        </template>
      </i18n>
      <p :class="$style.open">
        {{ $t('午前9時から午後9時（土日祝含む）') }}
      </p>
      <p :class="[$style.phone, $style.fzNumeric]">
        <span :class="$style.icon">
          <phone-icon alt="Phone" />
        </span>
        <a href="tel:0552238896">055-223-8896</a>
      </p>
    </div>

    <a
      v-scroll-to="{ el: '#consult', onDone: onDoneScroll }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('専門的な助言が必要な場合') }}</span>
      <arrow-forward-icon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
import PhoneIcon from '@/static/flow/phone-24px.svg'
import SentimentIcon from '@/static/flow/sentiment_very_dissatisfied-24px.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.rectContainer {
  &.triple {
    margin-left: px2vw(-11);
    margin-right: px2vw(-11);

    > .symptom {
      margin-left: px2vw(11);
      margin-right: px2vw(11);
      flex-grow: 10;
    }
  }
}

.callcenter {
  margin-top: px2vw(25);
  text-align: center;

  .open {
    margin-top: px2vw(10);
  }
}

@include largerThan($small) {
  $vw: 960;

  .rectContainer {
    &.triple {
      margin-left: px2vw(-11, $vw);
      margin-right: px2vw(-11, $vw);

      > .symptom {
        margin-left: px2vw(11, $vw);
        margin-right: px2vw(11, $vw);
      }
    }
  }

  .callcenter {
    margin-top: px2vw(25, $vw);

    .open {
      margin-top: px2vw(10, $vw);
    }
  }
}
</style>
