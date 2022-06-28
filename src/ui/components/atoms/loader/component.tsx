import {ActivityIndicator, View} from "react-native";
import Label from "../label/component";
import Theme from "../../../theme";
import LoaderStyle from "./style";

export default function Loader() {
  const { light } = Theme;
  const {loader, loaderText} = LoaderStyle;

  return (
    <View style={loader}>
      <Label style={loaderText}>Loading</Label>
      <ActivityIndicator size={90} color={light}/>
    </View>
  );
}
