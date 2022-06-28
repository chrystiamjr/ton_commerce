import Theme from "../../../theme";
import {Dimensions, StyleSheet} from "react-native";

const { light } = Theme;
const {height} = Dimensions.get('screen');
const BodyStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 1.15,
    position: 'relative',
    bottom: 0,
    backgroundColor: light,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50
  }
});

export default BodyStyle;
