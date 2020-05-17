<template>
  <div :class="$style.flowContainer">
    <h3 :class="$style.sectionTitle">
      <i18n path="新型コロナ外来 {advice} と判断された場合" tag="p">
        <template v-slot:advice>
          <strong>{{ $t('受診が不要') }}</strong>
        </template>
      </i18n>
    </h3>
    <div :class="$style.actionContainer">
      <ul :class="$style.actions">
        <li :class="$style.actionsList">
          <img
            :class="$style.actionsListIcon"
            src="/flow/house-24px.svg"
            aria-hiden="true"
            alt=" "
          />
          {{ $t('自宅で安静に過ごす') }}
        </li>
        <li :class="$style.actionsList">
          <img
            :class="$style.actionsListIcon"
            src="/flow/apartment-24px.svg"
            aria-hiden="true"
            alt=" "
          />
          {{ $t('一般の医療機関を受診') }}
        </li>
      </ul>
      <div :class="$style.nextAction">
        <i18n path="{getWorse}{advisory}に相談" :class="$style.content">
          <template v-slot:getWorse>
            <span>{{ $t('症状が良くならない場合は') }}</span>
          </template>
          <template v-slot:advisory>
            <strong>{{ $t('新型コロナ受診相談窓口') }}</strong>
          </template>
        </i18n>
      </div>
    </div>
  </div>
</template>

<script></script>

<style module lang="scss">
.flowContainer {
  @include card-container();

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  height: 100%;
  color: $gray-2;
}

.sectionTitle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  // margin-bottom: -2.0rem;

  strong {
    margin: 0 0.2em;
    font-size: 28px;
    font-weight: bold;
  }
}

.actionContainer {
  display: flex;
  justify-content: space-between;
}

.actions {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0 !important;
}

.actionsList {
  list-style-type: none;
  text-align: start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  &Icon {
    min-width: 30px;
    min-height: 30px;
    display: block;
    margin-right: 10px;
  }
}

.nextAction {
  width: 49%;
  padding: 1rem;
  border: $purple-1 1.5px solid;
  border-radius: 4px;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }

  strong {
    font-size: 1.5rem;
  }
}
</style>
