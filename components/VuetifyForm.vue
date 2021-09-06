<template>
  <form @submit.prevent="submit">
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="fullName"
          label="Vollständiger Name"
          type="text"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <form-elements-select
          :selectedDay="day"
          @input="
            (newDay) => {
              day = newDay
            }
          "
        ></form-elements-select>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          v-model="fromHour"
          label="Von (Stunde)"
          type="number"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          v-model="toHour"
          label="Bis (Stunde)"
          type="number"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn class="mr-4" type="submit"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    fullName: '',
    day: 'Saterday',
    fromHour: 0,
    toHour: 0,
  }),

  methods: {
    async submit(): Promise<void> {
      const formObject = {
        fullName: this.fullName,
        day: this.day,
        fromHour: this.fromHour,
        toHour: this.toHour,
      }
      await this.$store.dispatch('bookNewCalenderDate', formObject)
    },
    clear(): void {
      this.fullName = ''
      this.day = 'Saterday'
      this.fromHour = 0
      this.toHour = 0
    },
  },
})
</script>