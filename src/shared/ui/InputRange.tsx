import React from "react";
import NeighborLocation from "intergalactic/neighbor-location";
import InputNumber from "intergalactic/input-number";
import { Flex } from "intergalactic/flex-box";
import { InputRangeProps } from "../lib/zod";

export const InputRange: React.FC<InputRangeProps> = ({
  value,
  onChange,
  minRange = 0,
  maxRange = 10000000,
  placeholders = { from: "From", to: "To" },
  className,
}) => {
  const { from, to } = value;

  const handleChange = (key: "from" | "to") => (newValue: string) => {
    onChange({ ...value, [key]: newValue });
  };

  const handleBlur = () => {
    let validatedFrom = Math.max(Number(from), minRange);
    let validatedTo = Math.min(Number(to), maxRange);

    if (from !== "" && to === "") {
      validatedTo = maxRange;
    } else if (validatedFrom > validatedTo && to !== "") {
      validatedFrom = validatedTo;
      validatedTo = Math.max(Number(from), minRange);
    }

    const newFrom = validatedFrom.toString();
    const newTo = validatedTo.toString();

    if (newFrom !== from || newTo !== to) {
      onChange({ from: newFrom, to: newTo });
    }
  };

  return (
    <Flex mb={2} mt={2} className={className}>
      <NeighborLocation>
        <InputNumber>
          <InputNumber.Value
            min={minRange}
            max={maxRange}
            placeholder={placeholders.from}
            value={from}
            onChange={handleChange("from")}
            onBlur={handleBlur}
          />
          <InputNumber.Controls />
        </InputNumber>
        <InputNumber>
          <InputNumber.Value
            min={minRange}
            max={maxRange}
            placeholder={placeholders.to}
            value={to}
            onChange={handleChange("to")}
            onBlur={handleBlur}
          />
          <InputNumber.Controls />
        </InputNumber>
      </NeighborLocation>
    </Flex>
  );
};
