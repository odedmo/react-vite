import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { StyledMenuItem, StyledSelect } from "./StyledComponents";
import Option from "./Option";

export default function CustomSelect() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
  };

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      displayEmpty
      renderValue={(selected) =>
        selected ? String(selected) : "Select an option"
      }
      MenuProps={{
        PaperProps: {
          style: {
            maxWidth: "300px", // ✅ Limit dropdown width
            whiteSpace: "normal",
          },
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left", // Align to the left
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left", // Align to the left
        },
      }}
    >
      <StyledMenuItem value="option1">
        <Option />
      </StyledMenuItem>
      <StyledMenuItem value="option2">Option 2</StyledMenuItem>
    </StyledSelect>
  );
}
