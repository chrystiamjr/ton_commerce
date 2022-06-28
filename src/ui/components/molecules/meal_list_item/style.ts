import Theme from "../../../theme";
import {StyleSheet} from "react-native";

const { light, thin, primary, divider } = Theme;
const MealListItemStyle = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: light,
    borderBottomWidth: 1,
    borderBottomColor: divider,
  },
  thumbnail: {
    height: 46,
    width: 46,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: divider
  },
  mealContainer: {
    paddingLeft: 10,
    flex: 1
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  region: {
    fontSize: 14,
    lineHeight: 16,
    color: thin
  },
  price: {
    fontSize: 17,
    color: primary,
    fontWeight: 'bold',
  },
  arrow: {
    // fontSize: 22,
    // fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 3,
    color: thin
  }
});

export default MealListItemStyle;
