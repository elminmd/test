import { colorPalette } from "./colorPalette";

export const buttonTheme = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "outlined", color: "info" },
        style: {
          color: colorPalette.text.primary,
          borderColor: colorPalette.grey[300],

          "&:hover": {
            borderColor: colorPalette.grey[600],
            backgroundColor: colorPalette.grey[300],
          },
        },
      },
      {
        props: { variant: "outlined", color: "inherit" },
        style: {
          color: colorPalette.text.primary,
          borderColor: colorPalette.grey[300],

          "&:hover": {
            borderColor: colorPalette.grey[600],
            backgroundColor: colorPalette.grey[300],
          },
        },
      },
    ],
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontFamily: "TT-Interphases-Medium, sans-serif",
        fontSize: 16,
        lineHeight: 1.25,

        "&.MuiButton-sizeTiny": {
          padding: "2px 12px",
          borderRadius: 4,

          ...(ownerState.rounded && {
            borderRadius: 12,
          }),
        },

        "&.MuiButton-sizeSmall": {
          height: 32,
          fontSize: 14,
          padding: "4px 16px",
          borderRadius: 6,

          ...(ownerState.rounded && {
            borderRadius: 28,
          }),
        },

        "&.MuiButton-sizeMedium": {
          height: 44,
          padding: "10px 20px",
          borderRadius: 8,

          ...(ownerState.rounded && {
            borderRadius: 22,
          }),
        },

        "&.MuiButton-sizeLarge": {
          height: 56,
          padding: "14px 24px",
          borderRadius: 10,

          ...(ownerState.rounded && {
            borderRadius: 28,
          }),
        },

        "& .MuiChip-root": {
          width: 18,
          height: 18,
          borderRadius: "50%",
          marginLeft: 8,
        },

        "& .MuiChip-label": {
          padding: 0,
        },
      }),
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        width: "100%",
        overflowX: "auto",

        "& .MuiButton-root": {
          width: "auto",
          minWidth: "auto",
          whiteSpace: "nowrap",
        },

        "& .MuiButton-root.active": {
          color: colorPalette.common.white,
        },

        "& .MuiButton-outlinedInherit.active": {
          backgroundColor: colorPalette.text.primary,
          borderColor: colorPalette.text.primary,
        },

        "& .MuiButton-outlinedPrimary.active": {
          backgroundColor: colorPalette.primary.main,
          borderColor: colorPalette.primary.main,
        },

        "& .MuiButton-outlinedSuccess.active": {
          backgroundColor: colorPalette.success.main,
          borderColor: colorPalette.success.main,
        },

        "& .MuiButton-outlinedWarning.active": {
          backgroundColor: colorPalette.warning.main,
          borderColor: colorPalette.warning.main,
        },

        "& .MuiButton-outlinedInfo.active": {
          backgroundColor: colorPalette.info.main,
          borderColor: colorPalette.info.main,
        },
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      squared: true,
      size: "small",
    },
    variants: [
      {
        props: { color: "default" },
        style: {
          "&:hover": {
            borderColor: colorPalette.grey[600],
            backgroundColor: colorPalette.grey[300],
          },
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          border: `1px solid ${colorPalette.grey[300]}`,
        },
      },
      {
        props: { squared: true },
        style: {
          borderRadius: 8,
        },
      },
      {
        props: { squared: true, size: "large" },
        style: {
          borderRadius: 10,
        },
      },
      {
        props: { squared: true, size: "small" },
        style: {
          borderRadius: 6,
        },
      },
    ],
    styleOverrides: {
      root: {
        padding: 0,

        "&.MuiIconButton-colorInherit": {
          "&:hover": {
            backgroundColor: "unset",
          },
        },

        "&.MuiIconButton-sizeTiny": {
          width: 24,
          height: 24,
        },

        "&.MuiIconButton-sizeSmall": {
          width: 32,
          height: 32,
        },

        "&.MuiIconButton-sizeMedium": {
          width: 44,
          height: 44,
        },

        "&.MuiIconButton-sizeLarge": {
          width: 56,
          height: 56,
        },
      },
    },
  },
};
