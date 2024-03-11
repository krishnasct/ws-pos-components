import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormControl, InputLabel, SxProps, FormControlOwnProps} from "@mui/material";

interface SearchInputProps {
  id?: string;
  sx: SxProps;
  htmlFor?: string;
  className?: string;
  variant: FormControlOwnProps["variant"];
  value: string | number | boolean;
  lable: string;
  endAdornment: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export const SearchInput = ({
  id,
  sx,
  htmlFor,
  className,
  variant,
  value,
  lable,
  endAdornment,
  onChange,
}: SearchInputProps) => {
  return (
    <FormControl
      id={id}
      sx={sx} // System Override
      className={className}
      variant={variant}
    >
      <InputLabel htmlFor={htmlFor}>{lable}</InputLabel>
      <OutlinedInput
        type="text"
        value={value}
        endAdornment={endAdornment}
        label={lable}
        onChange={onChange}
      />
    </FormControl>
  );
};
