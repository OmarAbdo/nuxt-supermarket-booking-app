import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
   stateFactory: true,
})

export default class Calender extends VuexModule {
  calenderDates = []

  @Mutation
  setCalenderDates(calenderDates: []) {
    this.calenderDates = calenderDates;
  }

  @Action({ commit: 'setCalenderDates' })
  async calenderDatesRequest() {
    return await $axios.$get('/api/calendar');
  }

  @Action({})
  async bookNewCalenderDate(payload: {}) : Promise<string> {   
    return await $axios.$post('/api/calendar', payload);
  }

  get calenderDatesGetter() {
    return this.calenderDates
  }
}
