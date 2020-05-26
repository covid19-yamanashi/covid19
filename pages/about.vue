<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('当サイトについて') }}
    </h2>
    <TextCard>
      {{
        $t(
          '当サイトは、山梨県の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために開設したものです。'
        )
      }}
      {{
        $t(
          '開発は、山梨県内の有志によって結成された「stopcovid19.yamanashi.dev」チームが行っています。'
        )
      }}
      <br />
      <br />
      {{
        $t(
          '山梨県から発信された公式情報と客観的な数値をわかりやすく伝えることで、県内にお住まいの方、拠点を持つ企業の方、訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('ブラウザ環境について')">
      {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}<br />
      <ul class="About-Browser-List">
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>{{ $t('Google Chrome 最新版 (Windows 10以上)') }}</li>
        <li>{{ $t('Safari (macOS) 最新版') }}</li>
        <li>{{ $t('Opera 最新版') }}</li>
      </ul>
      {{
        $t(
          '※推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('当サイトへのリンクについて')">
      {{ $t('当サイトへのリンクは自由です。') }}
    </TextCard>
    <TextCard :title="$t('JavaScriptについて')">
      {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
      {{
        $t(
          'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
        )
      }}<br />
      {{
        $t(
          '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('クッキー (Cookie) について')">
      {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
      {{
        $t(
          'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('Google Analyticsの利用について')">
      {{
        $t(
          '当サイトでは、サービス向上やWebサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
        )
      }}<br />
      {{
        $t(
          'Google Analyticsは、当サイトが発行するクッキー(Cookie)を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。'
        )
      }}
      {{
        $t(
          'クッキー(Cookie)の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
        )
      }}<br />
      {{
        $t(
          '取得したデータはWebサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。'
        )
      }}<br />
      <br />
      {{
        $t(
          'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
        )
      }}<br />
      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analytics利用規約') }}
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Googleのプライバシーポリシー') }}
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </a>
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('免責事項')">
      {{
        $t(
          '当サイトに掲載されている情報については、山梨県によって公開されたデータですが、山梨県および当サイトの開発者・関係者は、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('ソースコードについて')">
      {{ $t('本サイトのソースコードは、東京都の「') }}
      <a
        href="https://stopcovid19.metro.tokyo.lg.jp/"
        target="_blank"
        rel="noopener"
      >
        {{ $t('東京都 新型コロナウイルス感染症対策サイト') }}
      </a>
      {{ $t('」で使われているものをMITライセンスの元で再使用しています。') }}
      {{ $t('このソースコードは誰でも自由に利用することができます。') }}
      {{ $t('詳しくは、') }}
      <a
        href="https://github.com/covid19-yamanashi/covid19"
        target="_blank"
        rel="noopener"
      >
        {{ $t('GitHub リポジトリ') }}
      </a>
      {{ $t('をご確認ください。') }}
    </TextCard>

    <TextCard :title="$t('お問い合わせ先')">
      {{ $t('stopcovid19.yamanashi.devチーム') }}<br />
      Twitter
      <a href="https://twitter.com/Covid19Y" target="_blank" rel="noopener">
        @Covid19Y
      </a>
    </TextCard>
  </div>
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('当サイトについて') as string
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}

a {
  @include text-link();
}
</style>
