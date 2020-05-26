<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="$t(headerItem.title)"
      :date="headerItem.date"
    />
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="'/flow'"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('陽性患者数')"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="Data.patients.date"
          :unit="'人'"
          :url="
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="$t('陽性患者の属性')"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.patients.date"
          :info="sumInfoOfPatients"
          :url="
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('県内の疑似症例の検査状況')"
          :title-id="'number-of-tested'"
          :chart-id="'time-stacked-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :unit="'件'"
          :url="
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('帰国者・接触者相談センター相談件数')"
          :title-id="'number-of-reports-to-covid19-consultation-desk'"
          :chart-id="'time-bar-chart-querents'"
          :chart-data="querentsGraph"
          :date="Data.querents.date"
          :unit="'件'"
          :url="
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('新型コロナウイルス感染症専用相談ダイヤル相談件数')"
          :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
          :chart-id="'time-bar-chart-contacts'"
          :chart-data="contactsGraph"
          :date="Data.contacts.date"
          :unit="'件'"
          :url="
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus.html'
          "
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
// import formatConfirmedCases from '@/utils/formatConfirmedCases'
import News from '@/data/news.json'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    WhatsNew,
    StaticInfo,
    DataTable
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)

    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)
    // 帰国者・接触者電話相談センター相談件数
    const querentsGraph = formatGraph(Data.querents.data)
    // 検査実施日別状況
    const inspectionsGraph = formatGraph(Data.inspections_summary.data)

    const inspectionsItems = [
      '都内発生（疑い例・接触者調査）',
      'その他（チャーター便・クルーズ船）'
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )
    // 検査陽性者の状況
    // const confirmedCases = formatConfirmedCases(Data.main_summary)

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: 'の累計',
      date: patientsGraph[patientsGraph.length - 1].label,
      unit: '人'
    }

    const data = {
      Data,
      patientsTable,
      patientsGraph,
      contactsGraph,
      querentsGraph,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      // confirmedCases,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '県内の最新感染動向',
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
