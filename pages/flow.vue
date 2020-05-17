<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon />
      <h2 class="Flow-Heading-Title">
        新型コロナウイルス感染症が心配なときに
      </h2>
      <PrinterButton :wrapper-class="'Flow-PullRight'" />
    </div>
    <div class="Flow-Card">
      <div class="Flow-Card-Images only-pc">
        <FlowPc />
      </div>
      <div class="only-sp">
        <flow-sp />
      </div>
      <a
        href="https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_consultation.html#Covid19_HealthConsultation"
        target="_blank"
        rel="noopener"
        class="Flow-Card-Button"
      >
        詳細を見る(山梨県のウェブサイト)
        <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
          mdi-open-in-new
        </v-icon>
      </a>
    </div>
  </div>
</template>

<script>
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton'
import FlowPc from '@/components/flow/FlowPc.vue'
import FlowSp from '@/components/flow/FlowSp.vue'

export default {
  components: { CovidIcon, PrinterButton, FlowPc, FlowSp },
  head() {
    return {
      title: '新型コロナウイルス感染症が心配なときに'
    }
  }
}
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;
  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    > svg {
      width: 30px;
      height: 30px;
      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }
    &-Title {
      @include font-size(30);
      font-weight: normal;
      color: $gray-2;
      margin-left: 8px;
      @include lessThan($medium) {
        @include font-size(20);
        margin-right: 0.5em;
        line-height: 1.35;
      }
    }
  }
  &-Card {
    display: flex;
    flex-direction: column;
    @include card-container();
    padding: 20px;
    margin-bottom: 20px;
    > h2 {
      @include card-h1();
      margin-bottom: 12px;
    }
    &-Images {
      text-align: center;
      > img {
        margin: 18px 0;
      }
    }
    &-Parts {
      @include card-container();
      padding: 30px 20px;
      margin-bottom: 20px;
      &.Flat {
        background-color: $gray-5;
      }
      .TelLink {
        width: 80%;
        margin: 0 auto;
      }
      .Link {
        @include text-link();
      }
      .SodanHeader {
        text-align: center;
        &.Title {
          @include font-size(24);
        }
      }
      .SodanChip {
        display: inline-block;
        background-color: $white;
        border-radius: 4px;
        padding: 8px 24px;
        margin: 0 auto 12px;
        color: $purple-1;
        font-weight: bold;
      }
      .SodanHeijitsu {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-width: 0.5px 0;
        border-style: solid;
        border-color: $gray-4;
        .Heijitsu {
          width: 70%;
          margin-right: 5px;
        }
      }
      .SodanYakan {
        padding-top: 12px;
        .Yakan {
          text-align: center;
          .SodanTime {
            @include font-size(14);
          }
        }
      }
      .Col2Btn {
        display: flex;
      }
      .Smaller {
        width: 70%;
        margin: 0 auto;
      }
    }
    &-Button {
      @include button-text('md');
      margin: 12px auto 0;
      @include font-size(20);
      text-align: center;
      font-weight: 600;
      text-decoration: none;
      color: $purple-1 !important;
      &:hover {
        color: $white !important;
      }
      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $purple-1 !important;
      }
    }
  }
  &-PullRight {
    margin: 0 0 0 auto;
  }
}
@include largerThan($medium) {
  .only-sp {
    display: none;
  }
  .only-pc {
    display: block;
  }
}
@include lessThan($medium) {
  .only-sp {
    display: block;
  }
  .only-pc {
    display: none;
  }
}
</style>
