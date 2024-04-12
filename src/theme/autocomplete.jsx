import { ListItemText, MenuItem } from "@mui/material";

import { ReactComponent as AngleDown } from "../assets/icons/angle-down.svg";

export const autocompleteTheme = {
  MuiAutocomplete: {
    defaultProps: {
      // disableClearable: true,
      freeSolo: true,
      popupIcon: <AngleDown />,
      loadingText: "Loading…",
      noOptionsText: "Empty…",
      renderOption: (props, option, _, ownerState) => (
        <MenuItem component="li" {...props}>
          <ListItemText>{ownerState.getOptionLabel(option)}</ListItemText>
        </MenuItem>
      ),
      slotProps: {
        paper: {
          sx: { borderRadius: 2 },
        },
      },
    },
    styleOverrides: {
      root: {
        // "&.Mui-focused #clear-on-escape-label": {
        //   transform: "translate(0, -60px) scale(0.75)",
        // },
        "& .MuiFilledInput-root": {
          "& .MuiAutocomplete-endAdornment": {
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      },

      // inputRoot: ({ ownerState }) => ({
      //   padding: "0px 12px",
      //   "& .MuiAutocomplete-input": {
      //     padding: "19px 12px 3px 12px",
      //     "&.MuiAutocomplete-inputSizeSmall": {
      //       padding: "5px 8px",
      //     },
      //     ...(ownerState.size === "small" && {
      //       "&.MuiAutocomplete-input": {
      //         padding: "5px 8px",
      //       },
      //     }),

      //     ...(ownerState.size === "large" && {
      //       padding: "25px 12px 6px 12px",
      //     }),
      //   },
      // }),
    },
  },
};
