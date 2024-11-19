import Dropdown from "intergalactic/dropdown";
import Button from "intergalactic/button";
import { FilterTrigger } from "intergalactic/base-trigger";
import { Text } from "intergalactic/typography";
import { InputRange } from "@/shared/ui";
import { useRangeFilter } from "./hooks/useRangeFilter";
import { RangeProps, RangePropsSchema } from "@/shared/lib/zod";

export const Range = (props: RangeProps) => {
  const parsedProps = RangePropsSchema.parse(props);

  const { label, placeholder } = parsedProps;
  const {
    filtersApplied,
    visible,
    value,
    displayValue,
    setVisible,
    clearAll,
    applyChange,
    setValue,
  } = useRangeFilter(parsedProps);

  return (
    <Dropdown visible={visible} onVisibleChange={setVisible}>
      <Dropdown.Trigger
        placeholder={placeholder || label}
        empty={!filtersApplied}
        tag={FilterTrigger}
        onClear={clearAll}
      >
        {filtersApplied ? `${label}: ${displayValue}` : label}
      </Dropdown.Trigger>
      <Dropdown.Popper w="224px" p="8px 8px 16px" aria-labelledby="title">
        <Text id="title" size={200} bold>
          {label}
        </Text>
        <InputRange
          value={value}
          onChange={setValue}
          minRange={0}
          maxRange={1000000}
          placeholders={{ from: "Min Views", to: "Max Views" }}
        />
        <Button use="primary" theme="info" w="100%" onClick={applyChange}>
          Apply
        </Button>
      </Dropdown.Popper>
    </Dropdown>
  );
};
