import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { thin, primary, error } = Theme;
const MealDetailStyle = StyleSheet.create({
  bodyContainer: {
    height: 'auto',
    paddingHorizontal: 18,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 18,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 35,
    lineHeight: 45,
    fontWeight: 'bold'
  },
  subText: {
    color: thin,
    fontSize: 14,
    textAlign: 'justify'
  },
  price: {
    fontSize: 18,
    color: primary,
    fontWeight: 'bold',
  },
  badgeContainer: {
    backgroundColor: primary,
    position: undefined,
    width: 'auto',
    height: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 15
  },
  badgeText: {
    fontSize: 13
  },
  btnText: {
    fontSize: 18
  },
  buyBtn: {
    marginTop: 30
  },
  removeBtn: {
    marginTop: 30,
    backgroundColor: error
  },
});

export default MealDetailStyle;
