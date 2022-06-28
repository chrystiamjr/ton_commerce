import {TextStyle} from "react-native";
import LabelStyle from "./style";

const {regular, medium, bold} = LabelStyle;
export const handleStyle = (style: TextStyle) => {
  if(style == undefined) return regular;
  switch (style.fontWeight) {
    case '500': case '600':
      return medium;

    case '700': case '800': case '900': case 'bold':
      return bold;

    default:
      return regular;
  }
}
