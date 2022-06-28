import {Text} from "react-native";

import {handleStyle} from "./handlers";
import LabelStyle from "./style";
import LabelProps from "./props";

export default function Label({ children, style }: LabelProps) {
  const {default: defaultStyle} = LabelStyle;
  const selectedStyle = handleStyle(style);

  return <Text style={[defaultStyle, selectedStyle, style]}>
    {children}
  </Text>;
}
