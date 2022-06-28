import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { regular } = Theme;
const LabelStyle = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 26,
    color: regular
  },
  regular: {
    fontFamily: 'metroRegular'
  },
  medium: {
    fontFamily: 'metroMedium'
  },
  bold: {
    fontFamily: 'metroBold'
  },
});

export default LabelStyle;
