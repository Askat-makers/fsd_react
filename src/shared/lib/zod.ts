import { z } from "zod";
import { FlagsIso2 } from "intergalactic/flags";

export const ChannelSchema = z.object({
  id: z.number(),
  name: z.string(),
  views: z.number(),
  followers: z.number(),
  country: z.string(),
});

const ChannelResponseSchema = z.object({
  data: z.array(ChannelSchema),
  total: z.number(),
});

const FiltersSchema = z.object({
  search: z.string().optional(),
  channelCountry: z.array(z.string()).optional(),
  viewsFrom: z.number().nullable().optional(),
  viewsTo: z.number().nullable().optional(),
  followersFrom: z.number().optional(),
});

export const CountrySelectPropsSchema = z.object({
  placeholder: z.string().optional(),
  onChange: z.function().args(z.array(z.custom<FlagsIso2>())),
});

export const RangePropsSchema = z.object({
  label: z.string(),
  placeholder: z.string().optional(),
  onChange: z.function().args(
    z.object({
      from: z.number().nullable(),
      to: z.number().nullable(),
    })
  ),
});

export const SearchPropsSchema = z.object({
  value: z.string(),
  onChange: z.function().args(z.string()),
  placeholder: z.string().optional(),
});

const InputRangePropsSchema = z.object({
  value: z.object({ from: z.string(), to: z.string() }),
  onChange: z
    .function()
    .args(
      z.object({
        from: z.string(),
        to: z.string(),
      })
    )
    .returns(z.void()),
  minRange: z.number().optional(),
  maxRange: z.number().optional(),
  placeholders: z
    .object({
      from: z.string().optional(),
      to: z.string().optional(),
    })
    .optional(),
  className: z.string().optional(),
});


export type Channel = z.infer<typeof ChannelSchema>;
export type ChannelResponse = z.infer<typeof ChannelResponseSchema>;
export type Filters = z.infer<typeof FiltersSchema>;

export type SortDirection = "asc" | "desc" | 1 | -1;
export type DataTableSort<K extends keyof Channel> = [K, SortDirection] | [];

export type CountrySelectProps = z.infer<typeof CountrySelectPropsSchema>;
export type RangeProps = z.infer<typeof RangePropsSchema>;
export type SearchProps = z.infer<typeof SearchPropsSchema>;
export type InputRangeProps = z.infer<typeof InputRangePropsSchema>;
