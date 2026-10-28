import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type SelectContent = {
  value: string | null;
  label: string;
};

type SelecMainProps = {
  label: string;
  content: SelectContent[];
  placeholder?: string;
  defaultValue?: string;
};

export function SelectMain({
  label,
  content,
  placeholder,
  defaultValue,
}: SelecMainProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder={`${placeholder}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
        </SelectGroup>
        {content?.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
