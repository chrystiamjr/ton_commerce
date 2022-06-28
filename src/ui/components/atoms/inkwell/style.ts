import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { light, primary } = Theme;
const InkwellStyle = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: primary,
    borderRadius: 10
  },
  buttonText: {
    paddingVertical: 10,
    color: light,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default InkwellStyle;
