import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { light, bold } = Theme;
const LoaderStyle = StyleSheet.create({
  loader: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    position: 'absolute',
    backgroundColor: bold,
    opacity: 0.90
  },
  loaderText: {
    fontSize: 28,
    color: light,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default LoaderStyle;
