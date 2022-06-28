import {StyleSheet} from "react-native";
import Theme from "../../../theme";

const { light } = Theme;
const BackButtonStyle = StyleSheet.create({
  back: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 8,
    zIndex: 99
  },
  arrow: {
    color: light,
    marginLeft: 8
  },
});

export default BackButtonStyle;
