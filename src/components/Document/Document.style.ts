import { StyleSheet } from "@react-pdf/renderer";

import theme from "../../theme";

const { colorLightText, pageMargins, pageFontFamily,pageFontSize } = theme;

const styles = StyleSheet.create({
  page: {
    padding: pageMargins,
    color: colorLightText,
    fontFamily: pageFontFamily,
    fontSize: pageFontSize,
  },
});

export default styles;
