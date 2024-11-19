import { sample } from "effector";
import {
  $channels,
  $total,
  changeFilters,
  changePage,
  changeSort,
  fetchChannels,
  fetchChannelsFx,
} from "@/entities/channels/model";

export const attachEvents = () => {
  sample({
    clock: [changeFilters],
    target: [changePage.prepend(() => 1), changeSort.prepend(() => [])],
  });
  sample({
    clock: [changeSort],
    target: changePage.prepend(() => 1),
  });
  sample({
    clock: [changePage, fetchChannels],
    target: fetchChannelsFx,
  });

  $channels.on(fetchChannelsFx.doneData, (_, payload) => payload.data);
  $total.on(fetchChannelsFx.doneData, (_, payload) => payload.total);
};
