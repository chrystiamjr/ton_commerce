import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { light, bold, primary } = Theme;
const HeaderStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 145,
    paddingTop: 40,
    backgroundColor: primary,
  },
  image: {
    height: 300,
    width: '100%',
    position: 'absolute',
    top: 0
  },
  imageOpacity: {
    height: 300,
    width: '100%',
    backgroundColor: bold,
    opacity: 0.5,
    position: 'absolute',
    top: 0
  },
  navigator: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    width: '100%',
  },
  title: {
    color: light,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    paddingTop: 5,
    position: 'absolute',
    top: 0
  },
  iconBtn: {
    flex: 1,
    width: 80,
    height: 120,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: -40,
    zIndex: 99
  },
});

export default HeaderStyle;
