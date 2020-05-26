<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:button>
      <span />
    </template>
    <v-data-table
      :headers="tableHeader"
      :items="tableDatasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
      class="cardTable"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;
      &.text-center {
        text-align: center;
      }
    }
    tbody {
      tr {
        color: $gray-1;
        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;
          &.text-center {
            text-align: center;
          }
        }
        &:nth-child(odd) {
          td {
            background: rgba($gray-4, 0.3);
          }
        }
        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }
  }
}
.note {
  padding: 8px;
  font-size: 12px;
  color: #808080;
}
</style>

<script>
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import formatTable from '@/utils/formatTable'
import Data from '@/data/data.json'

export default {
  components: { DataView, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      required: false,
      default: () => {}
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    const data = {
      Data
    }
    return data
  },
  computed: {
    // data関数内に変数を定義したとき、locale変更時に言語が切り替わらない
    displayInfo() {
      return {
        lText: this.info.lText,
        sText: this.$t('{date}' + this.info.sText, { date: this.info.date }),
        unit: this.$tc(this.info.unit, parseInt(this.info.lText))
      }
    },
    tableHeader() {
      for (const header of this.chartData.headers) {
        header.text =
          header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
      }
      return this.chartData.headers
    },
    tableDatasets() {
      const patientsTable = formatTable(Data.patients.data)
      const datasets = patientsTable.datasets
      for (const row of datasets) {
        row['居住地'] = this.getTranslatedWording(row['居住地'])
        row['性別'] = this.getTranslatedWording(row['性別'])
        row['退院'] = this.getTranslatedWording(row['退院'])

        if (row['年代'].substr(-1, 1) === '代') {
          const age = row['年代'].substring(0, 2)
          row['年代'] = this.$t('{age}代', { age })
        } else {
          row['年代'] = this.$t(row['年代'])
        }
      }
      return datasets
    }
  },
  methods: {
    getTranslatedWording(value) {
      if (value === '―' || value === '-' || value == null) {
        return value
      }

      return this.$t(value)
    }
  }
}
</script>
