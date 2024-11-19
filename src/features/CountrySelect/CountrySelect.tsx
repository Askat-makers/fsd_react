import Select from "intergalactic/select";
import { FlagsIso2, iso2Name } from "intergalactic/flags";
import { CountrySelectProps, CountrySelectPropsSchema } from "@/shared/lib/zod";

export const CountrySelect: React.FC<CountrySelectProps> = (props) => {
  const parsedProps = CountrySelectPropsSchema.parse(props);
  const { onChange, placeholder = "Country select" } = parsedProps;

  const countries: FlagsIso2[] = Object.keys(iso2Name).filter(
    (key): key is FlagsIso2 => key in iso2Name
  );
  const options = countries.map((code) => ({
    value: code,
    label: iso2Name[code],
    children: iso2Name[code],
  }));
  const handleChange = (countries: FlagsIso2[]) => {
    onChange(countries);
  };

  return (
    <Select
      placeholder={placeholder}
      onChange={handleChange}
      id="multiselect-select"
      options={options}
      multiselect
    />
  );
};
