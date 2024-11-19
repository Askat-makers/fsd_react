import { useUnit } from "effector-react";
import DataTable, { DataTableSort } from "intergalactic/data-table";
import { $channels, $sort, changeSort } from "@/entities/channels/model";
import { Channel } from "@/shared/lib/zod";

export const Table = () => {
  const data = useUnit($channels);
  const sort = useUnit($sort);
  const onChangeSort = useUnit(changeSort);

  const handleSortChange = (newSort: DataTableSort<keyof Channel>) =>
    onChangeSort(newSort);

  return (
    <DataTable
      data={data}
      sort={sort}
      onSortChange={handleSortChange}
      aria-label={"Channel table"}
      mb={4}
    >
      <DataTable.Head>
        <DataTable.Column name="name" children="Name" sortable />
        <DataTable.Column name="views" children="Views" sortable />
        <DataTable.Column name="followers" children="Followers" sortable />
        <DataTable.Column name="country" children="Country" sortable />
      </DataTable.Head>
      <DataTable.Body />
    </DataTable>
  );
};
