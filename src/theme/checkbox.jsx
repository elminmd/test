import { SvgIcon } from "@mui/material";

import { ReactComponent as CheckboxChecked } from "../assets/icons/checkbox-checked.svg";
import { ReactComponent as CheckboxIntermediate } from "../assets/icons/checkbox-intermediate.svg";
import { ReactComponent as CheckboxUnchecked } from "../assets/icons/checkbox-unchecked.svg";

export const checkboxTheme = {
  MuiCheckbox: {
    defaultProps: {
      icon: (
        <SvgIcon>
          <CheckboxUnchecked />
        </SvgIcon>),
      checkedIcon: (
        <SvgIcon>
          <CheckboxChecked />
        </SvgIcon>
      ),
      indeterminateIcon: (
        <SvgIcon>
          <CheckboxIntermediate />
        </SvgIcon>),
    },
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
};
