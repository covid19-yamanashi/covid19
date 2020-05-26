<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard
        :title="$t(item.title)"
        :link="item.link"
        :body="$t(item.body)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

export default Vue.extend({
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: '休業や失業で、生活資金についてお悩みの皆さまへ',
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_support.html#person',
          body:
            '生活福祉資金貸付制度では休業や失業により生活資金でお悩みの方々に向けた緊急小口資金等の特例貸付を実施しています。'
        },
        {
          title: '新型コロナウイルス対策休業助成金制度',
          link:
            'https://www.pref.yamanashi.jp/rosei-koy/novel_coronavirus_joseikin.html',
          body:
            'リンク先掲載の助成対象者に対して、休業した日、一人につき一日4,000円が助成されます。令和2年3月31日までの申請が必要です。'
        },
        {
          title: '子育て家庭休業助成金制度',
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_support.html#person',
          body:
            '子どもが小学校や保育所等へ登校・登園をしなかったことに伴い保護者が休業を余儀なくされた方に、一定額の助成を行うものです。'
        },
        {
          title: '経済変動対策融資',
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_support.html#business',
          body:
            '県では、新型コロナウイルス感染拡大の影響により売上が減少した際に活用できる経済変動対策融資を行っています。'
        },
        {
          title: '中小企業者等特別相談窓口',
          link:
            'https://www.pref.yamanashi.jp/shouko-kik/koronasoudanmadoguchi.html',
          body:
            '県、商工会議所、商工会などの新型コロナウイルスに関する中小企業・小規模企業の相談窓口の一覧です。'
        },
        {
          title: 'バス・タクシー事業者の予防・まん延防止対策について',
          link: 'https://www.pref.yamanashi.jp/kotsu-seisaku/koukyou.html',
          body:
            '公共交通事業者については乗務員の手洗い・マスクの着用、車両の消毒等、感染拡大の対策を講じています。'
        },
        {
          title: '工事現場等における対応について',
          link: 'https://www.pref.yamanashi.jp/gijutsukanri/corona.html',
          body:
            '公共事業の工事及び業務における新型コロナウィルス感染症の感染拡大防止に向けた対策です。'
        },
        {
          title: '農業者の皆様へ',
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/documents/consultatiion_agri.pdf',
          body:
            '新型コロナウイルスの影響を受けた農業者の皆さまの経営や資金繰り等に関する相談窓口の案内です。'
        },
        {
          title: '水産漁業者の皆様へ',
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/documents/suisan_2.pdf',
          body:
            '新型コロナウイルスの影響を受けた水産漁業者の皆さまの経営や資金繰り等に関する相談窓口の案内です。'
        }
      ]
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
<style lang="scss">
.Worker {
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
