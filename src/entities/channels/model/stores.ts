import { createStore } from "effector";
import { Channel, DataTableSort, Filters } from "@/shared/lib/zod";
import {
  changeFilters,
  changePage,
  changeSort,
  setInitialState,
} from "./events";

export const $channels = createStore<Channel[]>([]);
export const $total = createStore<number>(0);

export const $page = createStore<number>(1)
  .on(changePage, (_, page) => page)
  .on(setInitialState, (_, { page }) => page);

export const $filters = createStore<Filters>({
  viewsFrom: null,
  viewsTo: null,
  channelCountry: [],
  search: "",
})
  .on(changeFilters, (state, filters) => ({ ...state, ...filters }))
  .on(setInitialState, (_, { filters }) => filters);

export const $sort = createStore<DataTableSort<keyof Channel>>([])
  .on(changeSort, (_, newSort) => newSort)
  .on(setInitialState, (_, { sort }) => sort);
