import { Flex } from "intergalactic/flex-box";
import { useUnit } from "effector-react";
import { CountrySelect } from "@/features/CountrySelect";
import { Search } from "@/features/Search";
import { Range } from "@/features/Range";
import { $filters, changeFilters } from "@/entities/channels/model";

export const Filter = () => {
  const filters = useUnit($filters);
  const onChangeFilter = useUnit(changeFilters);

  return (
    <Flex gap="10px" mt={3} mb={3}>
      <Search
        value={filters.search || ""}
        onChange={(value) => onChangeFilter({ search: value })}
        placeholder="Search Channels"
      />
      <CountrySelect
        onChange={(countries) => onChangeFilter({ channelCountry: countries })}
      />
      <Range
        label="Views"
        onChange={(values) =>
          onChangeFilter({ viewsFrom: values.from, viewsTo: values.to })
        }
        placeholder="Views"
      />
    </Flex>
  );
};
