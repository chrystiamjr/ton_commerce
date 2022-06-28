import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { light } = Theme;
const BaseViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light,
    // paddingTop: Platform.OS === "android" ? 45 : 0
  }
});

export default BaseViewStyle;
