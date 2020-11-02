<template>
  <div class="Cities">
    <h2 class="Cities-Heading">
      各市町村からの情報
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
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
            'https://www.city.yamanashi.yamanashi.jp/citizen/docs/COVID_19_yamanashi_city.html'
        },
        {
          title: '大月市',
          link:
            'http://www.city.otsuki.yamanashi.jp/gyoumu/01hisyokoho/shingata-corona-virus_public_facility.html'
        },
        {
          title: '韮崎市',
          link: 'https://www.city.nirasaki.lg.jp/kinkyu/new_corona_virus_information.html'
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
            'https://www.city.koshu.yamanashi.jp/'
        },
        {
          title: '中央市',
          link: 'https://www.city.chuo.yamanashi.jp/soshiki/seisaku/hisho/oshirase/koronaosirase/index.html'
        },
        {
          title: '市川三郷町',
          link:
            'http://www.town.ichikawamisato.yamanashi.jp/02topics/2020-0421-1659-23.html'
        },
        {
          title: '早川町',
          link:
            'https://www.town.hayakawa.yamanashi.jp/town/grapple/covid-19.html'
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
          title: '昭和町',
          link:
            'http://www.town.showa.yamanashi.jp/guide/benri.php?cat_id=64'
        }, 
        {
          title: '道志村',
          link:
            'http://www.vill.doshi.lg.jp/'
        }, 
        {
          title: '西桂町',
          link:
            'http://www.town.nishikatsura.yamanashi.jp/forms/top/top.aspx'
        }, 
        {
          title: '忍野村',
          link:
            'https://www.vill.oshino.lg.jp/docs/2020041700019/'
        }, 
        {
          title: '山中湖村',
          link:
            'https://www.vill.yamanakako.lg.jp/docs/2020041000027/'
        }, 
        {
          title: '鳴沢村',
          link:
            'https://www.vill.narusawa.yamanashi.jp/forms/info/info.aspx?info_id=47235'
        }, 
        {
          title: '富士河口湖町',
          link:
            'https://www.town.fujikawaguchiko.lg.jp/info/list.php?ca_id=33'
        }, 
        {
          title: '小菅村',
          link:
            'http://www.vill.kosuge.yamanashi.jp/administration/news/2020/07/post-56.php'
        }, 
        {
          title: '丹波山村',
          link:
            'http://www.vill.tabayama.yamanashi.jp/kinkyu/2020-0526-1343-1.html'
        }, 
        {
          body:
            'その他の市町村は各自治体ウェブサイトのニュース欄などをご覧ください。'
        }
      ]
    }
  },
  head() {
    return {
      title: '各市町村からの情報'
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
