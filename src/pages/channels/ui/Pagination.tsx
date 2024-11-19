import { useUnit } from "effector-react";
import LibPagination from "intergalactic/pagination";
import { $page, $total, changePage } from "@/entities/channels/model";
import { CHANNELS_LIMIT_IN_PAGE } from "@/shared/config";

export const Pagination = () => {
  const onChangePage = useUnit(changePage);
  const totalChannels = useUnit($total);
  const currentPage = useUnit($page);

  const totalPages = Math.ceil(totalChannels / CHANNELS_LIMIT_IN_PAGE);

  return (
    <LibPagination
      currentPage={currentPage}
      onCurrentPageChange={onChangePage}
      totalPages={totalPages}
    />
  );
};
