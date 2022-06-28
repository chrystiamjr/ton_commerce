import {TouchableOpacity} from "react-native";

import BackButtonProps from "./props";
import BackButtonStyle from "./style";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function BackButton({ onPress }: BackButtonProps) {
  const {back, arrow} = BackButtonStyle;

  return (
    <TouchableOpacity style={back} onPress={() => onPress?.()}>
      <FontAwesome5Icon name={'angle-left'} size={26} style={arrow} />
    </TouchableOpacity>
  );
}

