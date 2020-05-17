<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('新型コロナ受診相談窓口') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">
        {{ $t('帰国者・接触者電話相談センター') }}
      </small>
    </h4>
    <p :class="[$style.open, $style.fzMedium]">
      <span>{{ $t('24時間対応') }}</span>
    </p>
    <dl>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('平日（日中）') }}
        </dt>
        <dd :class="$style.link">
          <a
            href="https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_consultation.html#Covid19_HealthConsultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('こちらから管轄地域の保健所へご連絡ください') }}
            <v-icon size="16">
              mdi-open-in-new
            </v-icon>
          </a>
        </dd>
      </div>
      <div>
        <dt>
          <ul :class="$style.night">
            <li>
              <span :class="[$style.fzMedium, $style.break, $style.mb10]">
                {{ $t('平日（夜間）') }}
              </span>
              {{ $t('午後5時から翌朝午前9時') }}
            </li>
            <li>
              <span :class="[$style.fzMedium, $style.break, $style.mb10]">
                {{ $t('土日祝 終日') }}
              </span>
              {{ $t('メッセージにより緊急電話番号が案内されます') }}
            </li>
          </ul>
        </dt>
      </div>
    </dl>
  </div>
</template>

<script></script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.open {
  margin-top: px2vw(20);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    jusify-content: center;
    align-items: center;
    background-color: $white;
    color: $purple-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;
  border-bottom: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
</style>
