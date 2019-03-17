<template>
  <div class="flex xs12 sm4 md3">
    <div
      role="combobox"
      class="v-input v-text-field v-select v-select--is-menu-active v-input--is-focused theme--light primary--text"
    >
      <div class="v-input__control">
        <div class="v-input__slot">
          <div class="v-select__slot">
            <label
              aria-hidden="true"
              class="v-label v-label--active theme--light primary--text"
              style="left: 0px; right: auto; position: absolute;"
              >Score</label
            >
            <div class="v-select__selections">take</div>
            <div class="v-select__selections">take</div>
            <div class="v-select__selections">take</div>
            <div class="v-input__append-inner">
              <div class="v-input__icon v-input__icon--append">
                <i
                  aria-hidden="true"
                  class="v-icon material-icons theme--light primary--text"
                  >arrow_drop_down</i
                >
              </div>
            </div>
          </div>
          <div class="v-menu"></div>
        </div>
        <div class="v-text-field__details">
          <div class="v-messages theme--light">
            <div class="v-messages__wrapper">
              <div class="v-messages__message">Pick your favorite states</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
