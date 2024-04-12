import { createTheme } from "@mui/material";

import { typographyOptions, typographyTheme } from "./typography";
import { colorPalette } from "./colorPalette";
import { shadows } from "./shadows";
import { autocompleteTheme } from "./autocomplete";
import { inputTheme } from "./input";
import { checkboxTheme } from "./checkbox";

export const theme = createTheme({
  spacing: 4,
  typography: { ...typographyOptions },
  palette: { ...colorPalette },
  shadows: [...shadows],
  components: {
    ...autocompleteTheme,
    ...typographyTheme,
    ...inputTheme,
    ...checkboxTheme
  },
});
