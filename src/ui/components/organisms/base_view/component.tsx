import {useRecoilState} from "recoil";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native";

import {loaderState} from "../../../../atoms/loader";
import Loader from "../../atoms/loader/component";
import BaseViewProps from "./props";
import BaseViewStyle from "./style";

export default function BaseView({ children }: BaseViewProps) {
  const {container} = BaseViewStyle;
  const [isLoading] = useRecoilState(loaderState);

  return (
    <SafeAreaView style={container}>
      <StatusBar style={"light"} />
      {children}
      {isLoading && ( <Loader /> )}
    </SafeAreaView>
  );
}
