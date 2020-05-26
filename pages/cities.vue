<template>
  <div class="Cities">
    <h2 class="Cities-Heading">
      {{ $t('各市町村からの情報') }}
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
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: '甲府市',
          link: 'https://www.city.kofu.yamanashi.jp/koho/korona.html'
        },
        {
          title: '富士吉田市',
          link: 'https://www.city.fujiyoshida.yamanashi.jp/info/2131'
        },
        {
          title: '都留市',
          link: 'https://www.city.tsuru.yamanashi.jp/shimin/10705.html'
        },
        {
          title: '山梨市',
          link:
            'http://www.city.yamanashi.yamanashi.jp/citizen/docs/korona_COVID-19.html'
        },
        {
          title: '大月市',
          link:
            'http://www.city.otsuki.yamanashi.jp/gyoumu/01hisyokoho/shingata-corona-virus_public_facility.html'
        },
        {
          title: '韮崎市',
          link: 'http://www.city.nirasaki.lg.jp/docs/2014012300025/'
        },
        {
          title: '南アルプス市',
          link: 'https://www.city.minami-alps.yamanashi.jp/docs/kansensyo.html'
        },
        {
          title: '北杜市',
          link: 'https://www.city.hokuto.yamanashi.jp/docs/11498.html'
        },
        {
          title: '甲斐市',
          link:
            'https://www.city.kai.yamanashi.jp/soshikinogoannai/kenkozoshinka/kenkokikakugakari/1_1/kansennsyo/index.html'
        },
        {
          title: '笛吹市',
          link:
            'https://www.city.fuefuki.yamanashi.jp/kenko/kenkoiryo/shinngatakoronaindex.html'
        },
        {
          title: '上野原市',
          link: 'https://www.city.uenohara.yamanashi.jp/gyosei/docs/4318.html'
        },
        {
          title: '甲州市',
          link:
            'https://www.city.koshu.yamanashi.jp/kenkou_fukushi_kyouiku/kenkou/detail/%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E6%83%85%E5%A0%B1'
        },
        {
          title: '中央市',
          link: 'https://www.city.chuo.yamanashi.jp/kinkyu/7791.html'
        },
        {
          title: '身延町',
          link:
            'https://www.town.minobu.lg.jp/kenko/hoken/20170727-fukushi-01.html'
        },
        {
          title: '南部町',
          link:
            'https://www.town.nanbu.yamanashi.jp/kakuka/COVID-19/news/fukushi.html'
        },
        {
          title: '富士川町',
          link:
            'https://www.town.fujikawa.yamanashi.jp/life/health/kannsennshou.html'
        },
        {
          body:
            'その他の市町村は各自治体ウェブサイトのニュース欄などをご覧ください。'
        }
      ]
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('各市町村からの情報') as string
    }
  }
}
</script>
<style lang="scss">
.Cities {
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
