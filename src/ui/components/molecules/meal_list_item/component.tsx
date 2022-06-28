import {Image, View} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import {formatPrice} from "../../../../util/functions";
import MealListItemProps from "./props";
import Label from "../../atoms/label/component";

import MealListItemStyle from "./style";
import {useRecoilState} from "recoil";
import {cartState} from "../../../../atoms/cart";

export default function MealListItem ({ detail, trailing }: MealListItemProps) {
  const [cartItems] = useRecoilState(cartState);
  const { container, thumbnail, mealContainer, name, region, price, arrow } = MealListItemStyle;

  return (
    <View key={detail.id} style={container}>
      <Image source={{uri: detail.thumbnail}} style={thumbnail} />

      <View style={mealContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Label style={name}>{ detail.name }</Label>
          {!trailing && cartItems.some((el) => el.id == detail.id)  && (
            <FontAwesome5Icon style={{marginLeft: 5}} name={'shopping-cart'} size={12} color={'green'} />
          )}
        </View>
        <Label style={region}>Region: { detail.region }</Label>
      </View>

      <Label style={price}>$ { formatPrice(detail.price) }</Label>
      {trailing != null && (trailing)}
      {!trailing && <FontAwesome5Icon name={'angle-right'} size={16} style={arrow} />}
    </View>
  );
}
