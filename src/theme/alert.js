import { colorPalette } from "./colorPalette";

export const alertTheme = {
  MuiAlert: {
    defaultProps: {
      variant: "filled",
    },
    styleOverrides: {
      root: {
        padding: "12px 14px",
        color: colorPalette.common.white,
        borderRadius: 8,
      },
      icon: {
        padding: 0,
      },
      message: {
        padding: 0,
      },
      filledInfo: {
        color: colorPalette.text.primary,
        backgroundColor: colorPalette.grey[200],
      },
      filledWarning: {
        color: colorPalette.text.primary,
      },
    },
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: {
        fontFamily: "TT-Interphases-DemiBold, sans-serif",
        margin: "0 0 4px 0",
      },
    },
  },
};
