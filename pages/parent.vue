<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :body="item.body" />
    </div>
  </div>
</template>
<script lang="ts">
import TextCard from '@/components/TextCard.vue'
export default {
  components: {
    TextCard
  },
  data() {
    return {}
  },
  computed: {
    items() {
      return [
        {
          title: this.$t('感染予防・健康管理'),
          body:
            '<ul>' +
            '<li>' +
            this.$t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            ) +
            '</li>' +
            '<li>' +
            this.$t(
              '手洗い、咳エチケット等により、感染予防に努めてください。'
            ) +
            '<br/>' +
            '<a href="https://www.pref.yamanashi.jp/koucho/coronavirus/documents/tadasiitearai_1.pdf" target="_blank" rel="noopener">' +
            this.$t('【参考】正しい手の洗い方（PDF：357KB）') +
            '</a>' +
            '<li>' +
            this.$t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            ) +
            '<br/>' +
            '<a href="https://www.pref.yamanashi.jp/koucho/coronavirus/documents/20200306newcoronabousi.pdf" target="_blank" rel="noopener">' +
            this.$t('新型コロナウイルスを防ぐには（PDF：250KB）') +
            '</a>' +
            '</ul>'
        },
        {
          title: this.$t('感染症を疑う場合の対応'),
          body:
            '<ul>' +
            '<li>' +
            this.$t(
              '風邪の症状や、37.5度以上の発熱が４日以上続いている、強いだるさ（倦怠感）、息苦しさ（呼吸困難）がある場合は、各保健所にご相談ください。'
            ) +
            '<br />' +
            '<a href="https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_consultation.html#Covid19_GeneralConsultation" target="_blank" rel="noopener">' +
            this.$t('新型コロナウイルス感染症専用相談ダイヤル') +
            '</a>' +
            '</li>' +
            '</ul>'
        },
        {
          title: this.$t('学校の臨時休校について'),
          body:
            '<ul>' +
            '<li>' +
            this.$t(
              '自治体により異なるため、詳細は各学校からのお知らせ等をご確認ください。'
            ) +
            '</li>' +
            '</ul>'
        },
        {
          title: this.$t('子育て家庭休業助成金制度について'),
          body:
            '<ul>' +
            '<li>' +
            this.$t(
              '子どもが小学校や保育所等へ登校・登園をしなかったことに伴い保護者が休業を余儀なくされた方に、一定額の助成を行うものです。'
            ) +
            '<br />' +
            '<a href="https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_support.html#person" target="_blank" rel="noopener">' +
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_support.html#person' +
            '</a>' +
            '</li>' +
            '</ul>'
        },
        {
          title: this.$t('子供の居場所づくり等に関する取り組みについて'),
          body:
            '<ul>' +
            '<li>' +
            this.$t('山梨県教育委員会による取り組みの紹介です。') +
            '<br />' +
            '<a href="https://www.pref.yamanashi.jp/kyouikusom/20200227.html" target="_blank" rel="noopener">' +
            this.$t('子供の居場所づくり等に関する取り組みについて') +
            '</a>' +
            '</ul>'
        }
      ]
    }
  },
  head() {
    return {
      title: this.$t('お子様をお持ちの皆様へ')
    }
  }
}
</script>
<style lang="scss">
.Parent {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
a {
  @include text-link();
}
</style>
