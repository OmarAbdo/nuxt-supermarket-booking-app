<template>
  <v-select
    v-model="select"
    :hint="select.name"
    :items="items"
    item-text="name"
    item-value="value"
    label="Tag"
    required
  ></v-select>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      select: this.selectedDay,
      items: [
        { name: 'Samstag', value: 'Saterday' },
        { name: 'Sonntag', value: 'Sunday' },
        { name: 'Montag', value: 'Monday' },
        { name: 'Dienstag', value: 'Tuesday' },
        { name: 'Mittwoch', value: 'Wedensday' },
        { name: 'Donnerstag', value: 'Thuresday' },
        { name: 'Freitag', value: 'Friday' },
      ],
    }
  },

  props: {
    selectedDay: {
      type: String,
      required: true,
    },
  },
  watch: {
    select(newVal) {
      this.$emit('input', newVal)
    },
    selectedDay(newVal) {
      this.select = newVal
    },
  },
})
</script>