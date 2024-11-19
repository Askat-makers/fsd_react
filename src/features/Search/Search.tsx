import React from "react";
import Input from "intergalactic/input";
import SearchIcon from "intergalactic/icon/Search/m";
import NeighborLocation from "intergalactic/neighbor-location";
import { SearchProps, SearchPropsSchema } from "@/shared/lib/zod";

export const Search: React.FC<SearchProps> = (props) => {
  const parsedProps = SearchPropsSchema.parse(props);

  const { value, onChange, placeholder = "Search" } = parsedProps;

  const handleInputChange = (value: string) => {
    onChange(value);
  };

  return (
    <NeighborLocation>
      <Input w="auto">
        <Input.Addon>
          <SearchIcon />
        </Input.Addon>
        <Input.Value
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          type="text"
          id="search"
        />
      </Input>
    </NeighborLocation>
  );
};
