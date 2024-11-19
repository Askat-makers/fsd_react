import { createEffect } from "effector";
import {
  Channel,
  ChannelResponse,
  ChannelSchema,
  SortDirection,
} from "@/shared/lib/zod";
import { post } from "@/shared/api";
import { $filters, $page, $sort } from "./stores";

export const fetchChannelsFx = createEffect<void, ChannelResponse, Error>(
  async () => {
    const page = $page.getState();
    const filters = $filters.getState();
    const sort = $sort.getState();
    const sortObj: Record<string, SortDirection> = {};
    if (sort.length) {
      sortObj[sort[0]] = sort[1] === "asc" ? -1 : 1;
    }

    try {
      const params = {
        search: filters.search,
        page,
        limit: 16,
        viewsFrom: filters.viewsFrom,
        viewsTo: filters.viewsTo,
        channelCountry: filters.channelCountry,
        sort: sortObj,
      };
      const response = await post<ChannelResponse>("/channels", params);
      const channelsData = response.data.data;
      const total = response.data.total;
      const channels = channelsData.map((channel: Channel) =>
        ChannelSchema.parse(channel)
      );
      return { data: channels, total };
    } catch (error) {
      console.error("Error in fetching channels:", error);
      throw error;
    }
  }
);
