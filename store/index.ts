import { GetterTree, ActionTree, MutationTree, ModuleTree } from 'vuex'
import Calender from './modules/Calender'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('calenderDatesRequest')
  },
}

export const modules: ModuleTree<RootState> = {
  Calender
}
