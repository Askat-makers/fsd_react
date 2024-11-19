import { useState } from "react";
import { z } from "zod";
import { RangeProps } from "@/shared/lib/zod";

const ValueSchema = z.object({
  from: z.string(),
  to: z.string(),
});

type ValueType = z.infer<typeof ValueSchema>;

export const useRangeFilter = (props: RangeProps) => {
  const { onChange } = props;

  const [filtersApplied, setFiltersApplied] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<ValueType>({ from: "", to: "" });
  const [displayValue, setDisplayValue] = useState<string>("");

  const clearAll = () => {
    setFiltersApplied(false);
    setValue({ from: "", to: "" });
    onChange({ from: null, to: null });
  };

  const applyChange = () => {
    const fromNumber = Number(value.from);
    const toNumber = Number(value.to);

    onChange({ from: fromNumber, to: toNumber });
    setFiltersApplied(Boolean(fromNumber || toNumber));
    setDisplayValue(formatDisplayValue(value));
    setVisible(false);
  };

  const formatDisplayValue = ({ from, to }: ValueType) => {
    if (from && to) {
      return `${from} - ${to}`;
    }
    if (from || to) {
      return from || to;
    }
    return "";
  };

  return {
    filtersApplied,
    visible,
    value,
    displayValue,
    setVisible,
    clearAll,
    applyChange,
    setValue,
  };
};
