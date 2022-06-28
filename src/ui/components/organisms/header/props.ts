import {TextStyle, ViewStyle} from "react-native";

export default interface HeaderProps {
  nav?: any,
  children?: any,
  style?: ViewStyle,
  title?: string,
  titleStyle?: TextStyle,
  backgroundImage?: string,
  hasBackBtn?: boolean,
  hasBasket?: boolean
}
