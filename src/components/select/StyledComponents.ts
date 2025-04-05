import { Select, MenuItem } from "@mui/material";
import styled from "styled-components";

// StyledSelect component with hover and focused states
export const StyledSelect = styled(Select)`
  width: 200px;
  background-color: white;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #6200ea;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #3700b3;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #03dac5;
  }
`;

// Styled MenuItem to allow wrapping and block-level display
export const StyledMenuItem = styled(MenuItem)`
  white-space: normal !important; /* Allow text to wrap to the next line */
`;
