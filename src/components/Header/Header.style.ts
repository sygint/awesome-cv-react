import { StyleSheet } from "@react-pdf/renderer";

import theme from "../../theme";

const {
  fontWeightLight,
  fontWeightBold,
  colorHighlight,
  colorText,
  colorLightText,
  headerFontFamily,
  headerFontSize,
  headerNameFontSize,
  headerPositionFontSize,
} = theme;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "4pt",

    marginTop: "-0.15cm",
    marginBottom: "15pt", 

    fontFamily: headerFontFamily,
    fontSize: headerFontSize,
    textAlign: "center",
  },
  name: {
    fontSize: headerNameFontSize,
    fontWeight: fontWeightBold,
    color: colorText,
  },
  firstName: {
    color: colorLightText,
    fontWeight: fontWeightLight,
  },
  positions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "4pt",

    fontSize: headerPositionFontSize,
    color: colorHighlight,
    textTransform: "uppercase",
  },
  extras: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "12pt"
  },
  entry: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4pt"
  },
});

export default styles;
