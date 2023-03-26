import { StyleSheet } from "@react-pdf/renderer";

import theme from "../../theme";

const {
  colorText,
  colorHighlight,
  sectionFontFamily,
  sectionHeaderFontSize,
  sectionHeaderFontWeight,
} = theme;

const styles = StyleSheet.create({
  section: {
    marginBottom: "0.4cm",

    fontFamily: sectionFontFamily,
  },
  subSection: {
    marginBottom: "0.25cm",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2pt",

    fontSize: sectionHeaderFontSize,
    fontWeight: sectionHeaderFontWeight,
    color: colorText,
  },
  sectionBody: {
    padding: "0.15cm 0",
  },
  highlight: {
    color: colorHighlight,
  },
  line: {
    flexGrow: 1,

    height: "11px",

    borderBottom: "1px solid black",
  },
  entry: {
    display: "flex",
    flexDirection: "row",
    gap: "25pt",

    marginBottom: "0.15cm",
  },
  entryTitle: {
    width: "3.75cm",

    fontWeight: "bold",
    textAlign: "right",
    color: colorText,
  },
  entryItems: {
    width: "100%",

    fontSize: "9pt",
    fontWeight: 100,
  },
  entryItems2: {
    display: "flex",
    flexDirection: "row",
    gap: "0.2cm",

    fontSize: "9pt",
    fontWeight: 100,
  },
  entryHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: "0.1cm",
  },
  organization: {
    fontWeight: "bold",
    color: colorText,
  },
  location: {
    color: colorHighlight,
    fontStyle: "italic",
  },
  position: {
    fontSize: "7pt",
    textTransform: "uppercase",
  },
  dates: {
    fontSize: "8pt",
    fontStyle: "italic",
  },
});

export default styles;
