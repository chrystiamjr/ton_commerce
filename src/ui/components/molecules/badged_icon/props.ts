import {TextStyle, ViewStyle} from "react-native";

export default interface BadgedIconProps {
  icon: string,
  iconSize?: number,
  iconColor?: string,
  backgroundColor?: string,
  badgeStyle?: ViewStyle,
  badgeContentStyle?: TextStyle,
  children: any,
  onPress?: Function
}
