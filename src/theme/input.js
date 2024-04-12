import { colorPalette } from "./colorPalette";

export const inputTheme = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        // fontSize: 14,

        "&.Mui-focused": {
          borderColor: colorPalette.grey[600],
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: colorPalette.grey[700],

        "& .MuiTypography-root": {
          color: "inherit",
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      // variant: "filled",
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontSize: 14,
        borderRadius: 8,

        ...(ownerState.size === "small" && {
          borderRadius: 6,

          "& .MuiFilledInput-input": {
            padding: "5px 8px",
          },
        }),

        ...(ownerState.size === "large" && {
          fontSize: 16,

          "& .MuiFilledInput-input": {
            paddingTop: "25px",
            paddingBottom: "6px",
          },
        }),
      }),
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        fontSize: "inherit",
        borderRadius: "inherit",
        border: `1px solid ${colorPalette.grey[300]}`,
        backgroundColor: colorPalette.common.white,

        "&.MuiInputBase-multiline": {
          paddingTop: 19,
        },

        "& .MuiInputBase-inputMultiline": {
          padding: 0,

          "&::-webkit-scrollbar": {
            width: 4,
          },

          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },

          "&::-webkit-scrollbar-thumb": {
            background: colorPalette.grey[300],

            "&:hover": {
              background: colorPalette.grey[600],
            },
          },
        },

        "&:hover, &.Mui-focused": {
          backgroundColor: colorPalette.common.white,
        },

        "&.Mui-disabled": {
          backgroundColor: colorPalette.grey[200],

          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: colorPalette.text.primary,
          },
        },
      },

      input: {
        paddingTop: "19px",
        paddingBottom: "3px",
      },
    },
  },
};
