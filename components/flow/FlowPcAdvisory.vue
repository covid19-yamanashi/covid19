<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div style="width:70%; margin:0 auto;">
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('新型コロナ受診相談窓口')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
          {{ $t('帰国者・接触者電話相談センター') }}
        </div>
        <div>
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div class="py-8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（日中）') }}
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_consultation.html#Covid19_HealthConsultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{
                $t('こちらから管轄地域の保健所へご連絡ください')
              }}</span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div :class="$style.mt8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（夜間）') }}
          </div>
          <span>{{ $t('午後5時から翌朝午前9時') }}</span>
        </div>
        <div :class="$style.mt1">
          <span :class="$style.AdvisoryContentsSubTitle">
            {{ $t('土日祝日 終日') }}
          </span>
        </div>
        <div
          :class="[
            $style.AdvisoryTelephoneArea,
            $style.AdvisoryBlockCentering,
            $style.mt8
          ]"
        >
          <p>
            {{ $t('メッセージにより緊急電話番号が案内されます') }}
          </p>
          <!--
          <a :class="$style.AdvisoryTelephone" href="tel">
            <img
              :class="$style.AdvisoryTelephoneIcon"
              src="/flow/phone-24px.svg"
              arig-hidden="true"
              :alt="$t('電話番号')"
            />
            000-0000
          </a>
          -->
        </div>
        <div v-if="!['ja'].includes($i18n.locale)" class="pt-8">
          <span>{{ $t('ひまわり') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style module lang="scss">
.Advisory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: $gray-2;

  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    height: 100%;
    padding: 30px 20px 20px 20px;
    // margin-bottom: 10px;
    text-align: center;
  }

  &Contents {
    font-weight: bold;

    &:not(:first-child) {
      border-top: 0.5px solid $gray-4;
    }

    &Title {
      font-size: 26px;
      line-height: 28px;
    }

    &Title2 {
      font-size: 18px;
    }

    &SubTitle {
      font-size: 18px;
    }

    &ColsSentense {
      line-height: 18px;
    }
  }

  &BlockCentering {
    display: flex;
    justify-content: center;
  }

  &Link {
    line-height: 22px;
    text-align: left;

    a {
      color: $gray-2;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &TelephoneArea {
    display: inline-flex;
  }

  &Telephone {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;

    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
    }

    &:visited,
    &:hover,
    &:active,
    &:focus {
      @media screen {
        outline: 1px dotted $gray-3;
      }
    }

    &Icon {
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
    }
  }

  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 24px auto;
  }

  &WhiteBox {
    background-color: $white;
    max-width: 160px;
    padding: 10px;

    &Sentense {
      color: $purple-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
}

.mt1 {
  margin-top: 4px !important;
}

.mt8 {
  margin-top: 32px !important;
}
</style>
