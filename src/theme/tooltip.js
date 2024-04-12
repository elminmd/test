import { colorPalette } from "./colorPalette";

export const tooltipTheme = {
  MuiTooltip: {
    defaultProps: {
      arrow: true,
      placement: "top",
      leaveTouchDelay: 5000,
      enterTouchDelay: 0,
    },
    styleOverrides: {
      tooltip: {
        fontSize: "0.9rem",
        padding: "12px 16px",
        backgroundColor: colorPalette.text.primary,
      },
      arrow: {
        color: colorPalette.text.primary,
      },
    },
  },
};
