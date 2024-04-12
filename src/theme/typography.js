export const typographyOptions = {
  fontFamily: [
    "TT-Interphases-Regular",
    "TT-Interphases-Light",
    "TT-Interphases-Medium",
    "TT-Interphases-DemiBold",
    "TT-Interphases-Bold",
    "sans-serif",
  ].join(","),
  h1: {
    fontFamily: "TT-Interphases-DemiBold, sans-serif",
    fontSize: "3.5rem",
    lineHeight: 1.15,
  },
  h2: {
    fontFamily: "TT-Interphases-Medium, sans-serif",
    fontSize: "2.625rem",
    lineHeight: 1.19,
  },
  h3: {
    fontFamily: "TT-Interphases-Medium, sans-serif",
    fontSize: "2rem",
    lineHeight: 1.12,
  },
  h4: {
    fontFamily: "TT-Interphases-Medium, sans-serif",
    fontSize: "1.875rem",
    lineHeight: 1.08,
  },
  h5: {
    fontFamily: "TT-Interphases-Medium, sans-serif",
    fontSize: "1.5rem",
    lineHeight: 1.16,
  },
  h6: {
    fontFamily: "TT-Interphases-Medium, sans-serif",
    fontSize: "1.25rem",
    lineHeight: 1.2,
  },
  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.25,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.42,
  },
  subtitle3: {
    fontSize: "0.75rem",
    lineHeight: 1.33,
  },
  body1: {
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  body2: {
    fontSize: "1rem",
    lineHeight: 1.25,
  },
  body3: {
    fontSize: "0.875rem",
    lineHeight: 1.42,
  },
  button: undefined,
  caption: undefined,
  overline: undefined,
};

export const typographyTheme = {
  MuiTypography: {
    defaultProps: {
      variant: "body3",
      variantMapping: {
        body3: "p",
        subtitle3: "p",
      },
    },
    styleOverrides: {
      gutterBottom: {
        marginBottom: "0.8em",
      },
    },
  },
};
