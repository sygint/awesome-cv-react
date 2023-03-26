import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: `${__dirname}/fonts/Roboto-Regular.ttf`,
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: `${__dirname}/fonts/Roboto-Thin.ttf`,
      fontStyle: "normal",
      fontWeight: 100,
    },
    {
      src: `${__dirname}/fonts/Roboto-Light.ttf`,
      fontStyle: "normal",
      fontWeight: 300,
    },
    {
      src: `${__dirname}/fonts/Roboto-Medium.ttf`,
      fontStyle: "normal",
      fontWeight: 600,
    },
    {
      src: `${__dirname}/fonts/Roboto-Bold.ttf`,
      fontStyle: "normal",
      fontWeight: 900,
    },
    {
      src: `${__dirname}/fonts/Roboto-Italic.ttf`,
      fontStyle: "italic",
      fontWeight: "normal",
    },
    {
      src: `${__dirname}/fonts/Roboto-ThinItalic.ttf`,
      fontStyle: "italic",
      fontWeight: 100,
    },
    {
      src: `${__dirname}/fonts/Roboto-LightItalic.ttf`,
      fontStyle: "italic",
      fontWeight: 300,
    },
    {
      src: `${__dirname}/fonts/Roboto-MediumItalic.ttf`,
      fontStyle: "italic",
      fontWeight: 600,
    },
    {
      src: `${__dirname}/fonts/Roboto-BoldItalic.ttf`,
      fontStyle: "italic",
      fontWeight: 900,
    },
  ],
});

Font.register({
  family: "SourceSansPro",
  fonts: [
    {
      src: `${__dirname}/fonts/SourceSansPro-Regular.otf`,
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-Light.otf`,
      fontStyle: "normal",
      fontWeight: 300,
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-SemiBold.otf`,
      fontStyle: "normal",
      fontWeight: 600,
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-Bold.otf`,
      fontStyle: "normal",
      fontWeight: 700,
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-Italic.otf`,
      fontStyle: "italic",
      fontWeight: "normal",
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-LightItalic.otf`,
      fontStyle: "italic",
      fontWeight: 300,
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-SemiBoldItalic.otf`,
      fontStyle: "italic",
      fontWeight: 600,
    },
    {
      src: `${__dirname}/fonts/SourceSansPro-BoldItalic.otf`,
      fontStyle: "italic",
      fontWeight: 700,
    },
  ],
});

const colors = {
  white: "#fff",
  black: "#000",
  gray: "#5d5d5d",
  grayDark: "#333",
  grayMedium: "#414141",
  grayLight: "#999",

  green: "#c2e15f",
  orange: "#fda333",
  purple: "#d3a4f9",
  red: "#fb4485",
  blue: "#6ce0f1",

  awesomeEmerald: "#00a388",
  awesomeSkyBlue: "#0395de",
  awesomeRed: "#dc3522",
  awesomePink: "#ef4089",
  awesomeOrange: "#ff6138",
  awesomeNephritis: "#27ae60",
  awesomeConcrete: "#95a5a6",
  awesomeDarkNight: "#131a28",
};

const fontWeights = {
  fontWeightLight: 100,
  fontWeightBold: 900,
};

const fonts = {
  SourceSansPro: "SourceSansPro",
  Roboto: "Roboto",
};

const theme = {
  ...fontWeights,

  colorHighlight: colors.awesomeRed,
  colorText: colors.grayDark,
  colorLightText: colors.gray,
  fontFamily: fonts.SourceSansPro,

  pageMargins: ".8cm 1.4cm 1.8cm",
  pageFontFamily: fonts.SourceSansPro,
  pageFontSize: "10pt",

  headerFontFamily: fonts.Roboto,
  headerFontSize: "8pt",
  headerNameFontSize: "32pt",
  headerPositionFontSize: "7.6pt",

  sectionFontFamily: fonts.SourceSansPro,
  sectionFontSize: "12pt",
  sectionHeaderFontSize: "16pt",
  sectionHeaderFontWeight: fontWeights.fontWeightBold,
};

export default theme;
