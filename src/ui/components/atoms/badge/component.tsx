import {View} from "react-native";

import Label from "../label/component";
import BadgeProps from "./props";
import BadgeStyle from "./style";
import {copyWith} from "../../../../util/functions";

export default function Badge({ children, style, contentStyle }: BadgeProps) {
  const {container, content} = BadgeStyle;

  return (
    <View style={[container, style]}>
      <Label style={copyWith([content, contentStyle])}>{ children }</Label>
    </View>
  );
}
