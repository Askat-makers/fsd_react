import { useEffect } from "react";
import { fetchChannels } from "@/entities/channels/model";
import { Table } from "./Table";
import { Filter } from "./Filter";
import { Pagination } from "./Pagination";

export const ChannelsPage = () => {
  useEffect(() => {
    fetchChannels();
  }, []);
  return (
    <div className="channels">
      <Filter />
      <Table />
      <Pagination />
    </div>
  );
};
