import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { light, error } = Theme;
const BadgeStyle = StyleSheet.create({
  container: {
    width: 21,
    height: 21,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 90,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,
    backgroundColor: error,
    opacity: 0.87
  },
  content: {
    fontSize: 12,
    lineHeight: 18,
    color: light
  }
});

export default BadgeStyle;
