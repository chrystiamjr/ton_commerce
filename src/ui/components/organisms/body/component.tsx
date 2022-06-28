import {View} from "react-native";

import BodyProps from "./props";
import BodyStyle from "./style";

export default function Body({ children, style }: BodyProps) {
  const {container} = BodyStyle;

  return (
    <View style={[container, style]}>
      {children}
    </View>
  );
}
