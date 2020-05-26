<template>
  <div class="Lodging">
    <h2 class="Lodging-Heading">
      宿泊事業者の皆さまへ
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
          title: '宿泊施設における新型コロナウイルス感染症への対応について',
          link:
            'https://www.pref.yamanashi.jp/eisei-ykm/20200212ryokan_corona.html',
          body:
            '山梨県内の宿泊施設における新型コロナウイルス感染症への対応については下記をご覧ください。'
        },
        {
          title: '笛吹市：宿泊料金割引事業（延期）',
          link:
            'https://www.city.fuefuki.yamanashi.jp/kanko/sangyo/kanko/syukuhakuwaribiki.html',
          body:
            '笛吹市では令和2年4月1日より市内の旅館・ホテルの宿泊料金の割引事業を実施します。'
        }
      ]
    }
  },
  head() {
    return {
      title: '宿泊事業者の皆さまへ'
    }
  }
}
</script>
<style lang="scss">
.Lodging {
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
