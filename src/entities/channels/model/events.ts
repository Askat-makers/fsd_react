import { createEvent } from "effector";
import { Channel, DataTableSort, Filters } from "@/shared/lib/zod";

export const fetchChannels = createEvent();
export const changePage = createEvent<number>();
export const changeSort = createEvent<DataTableSort<keyof Channel>>();
export const changeFilters = createEvent<Filters>();
export const setInitialState = createEvent<{
  filters: Filters;
  page: number;
  sort: [];
}>();
