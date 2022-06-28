import {StyleSheet} from "react-native";
import Theme from "../../../theme";

const { light, thin, primary, divider } = Theme;
const CartListStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light
  },
  body: {
    flex: 0.9,
    backgroundColor: light
  },
  removeBtn: {
    marginLeft: 20,
    marginRight: 5,
    marginTop: 3,
  },
  footer: {
    flex: 0.1,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: divider,
    borderTopWidth: 1.5,
    borderTopColor: thin+'1F',
  },
  footerLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'flex-start',
  },
  footerPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: primary,
  }
});

export default CartListStyle;
