<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('Navi Open')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.svg" :alt="$t('Yamanashi')" />
        </div>
        <h1 class="SideNavigation-Heading">
          {{ $t('COVID-19') }}<br />{{ $t('Measures site') }}
        </h1>
      </nuxt-link>
    </div>
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('Navi Close')"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>
      <LanguageSelector />
      <v-divider class="SideNavigation-HeadingDivider" />
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>
      <div class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <a href="https://twitter.com/Covid19Y" target="_blank" rel="noopener">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/covid19.yamanashi"
            target="_blank"
            rel="noopener"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://github.com/covid19-yamanashi/covid19">
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
        <small class="SideNavigation-Copyright" lang="en">
          Content on This Site is Licensed Under a
          <a
            rel="license"
            target="_blank"
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            Creative Commons Attribution 4.0 International License
          </a>
          <br />
          © 2020 stopcovid19.yamanashi.dev
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import LanguageSelector from '@/components/LanguageSelector'

export default {
  components: {
    ListItem,
    LanguageSelector
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items() {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('The latest updates'),
          link: '/',
          divider: true
        },
        {
          icon: 'covid',
          title: this.$t('If you feel concerned about COVID-19'),
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/documents/soudanmeyasu.pdf',
          divider: true
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('for Citizens'),
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus.html'
        },
        {
          icon: 'parent',
          title: this.$t('for Families with children'),
          link: '/parent'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('for Enterprises and Employees'),
          link: '/worker'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('for Lodging business'),
          link: '/lodging',
          divider: true
        },
        {
          title: this.$t('Information from Municipalities'),
          link: '/cities',
          divider: true
        },
        {
          title: this.$t('Message from Governor Nagasaki'),
          link:
            'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_gvmessages.html'
        },
        {
          title: this.$t('Government official website'),
          link: 'https://www.pref.yamanashi.jp/index.html'
        },
        {
          title: this.$t('Government official Twitter'),
          link: 'https://twitter.com/coronayamanashi',
          divider: true
        },
        {
          title: this.$t('About us'),
          link: '/about',
          divider: true
        }
      ]
    },
    isClass() {
      return item => (item.title.charAt(0) === '【' ? 'kerningLeft' : '')
    }
  },
  methods: {
    openNavi() {
      this.$emit('openNavi')
    },
    closeNavi() {
      this.$emit('closeNavi')
    }
  }
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
    margin-right: 16px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 20px 16px 0 0;
    width: 140px;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-HeadingDivider {
    margin: 0px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & img {
      width: 30px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
}
.open {
  @include lessThan($small) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);
    background-color: $white;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
</style>
