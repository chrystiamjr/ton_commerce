import {TextStyle, ViewStyle} from "react-native";

export default interface InkwellProps {
  title: string,
  style: ViewStyle,
  titleStyle: TextStyle,
  onPress?: Function
}
