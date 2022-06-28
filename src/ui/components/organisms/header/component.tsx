import {ImageBackground, TouchableOpacity, View} from "react-native";

import {useRecoilState} from "recoil";
import {cartState} from "../../../../atoms/cart";

import BadgedIcon from "../../molecules/badged_icon/component";
import BackButton from "../../atoms/back_button/component";
import Label from "../../atoms/label/component";

import HeaderStyle from "./style";
import HeaderProps from "./props";
import {copyWith} from "../../../../util/functions";

export default function Header({
  nav,
  children,
  style,
  title,
  titleStyle = {},
  backgroundImage,
  hasBackBtn = false,
  hasBasket = true
}: HeaderProps) {
  const defaultStyle = HeaderStyle;
  const [cartItems] = useRecoilState(cartState);

  return (
    <View style={[defaultStyle.container, style]}>
      {backgroundImage && (
        <>
          <ImageBackground
            source={{uri: backgroundImage}}
            resizeMode="cover"
            style={[defaultStyle.image, {height: style?.height}]}
          />
          <View style={[defaultStyle.imageOpacity, {height: style?.height}]} />
        </>
      )}
      <View style={defaultStyle.navigator}>

        {hasBackBtn && (<BackButton onPress={() => nav.goBack()} />)}
        <Label style={copyWith([defaultStyle.title, titleStyle])}>
          { title ?? 'Ton Commerce' }
        </Label>

        {hasBasket && (
          <>
            <View style={defaultStyle.iconBtn}>
              <BadgedIcon badgeStyle={{zIndex: 9}} icon={'shopping-cart'}>
                {cartItems.length > 0 ? cartItems.length : null}
              </BadgedIcon>
            </View>
            <TouchableOpacity style={defaultStyle.iconBtn} onPress={() => nav?.navigate('BasketList')} />
          </>
        )}
      </View>
      { children }
    </View>
  );
}
