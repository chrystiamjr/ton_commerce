import {TextStyle, TouchableOpacity} from "react-native";

import {copyWith} from "../../../../util/functions";
import Label from "../label/component";

import InkwellStyle from "./style";
import InkwellProps from "./props";

export default function Inkwell({ title, style, titleStyle, onPress }: InkwellProps) {
  const {button, buttonText} = InkwellStyle;
  const labelStyle: TextStyle = copyWith([buttonText, titleStyle]);

  return <TouchableOpacity style={[button, style]} onPress={() => onPress?.()}>
    <Label style={labelStyle}>{title}</Label>
  </TouchableOpacity>;
}
