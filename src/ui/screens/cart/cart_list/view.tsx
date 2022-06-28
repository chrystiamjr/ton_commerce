import {FlatList, TouchableOpacity, View} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import {useRecoilState, useRecoilValue} from "recoil";
import {cartState, totalPriceSelector} from "../../../../atoms/cart";
import {formatPrice} from "../../../../util/functions";
import IMeal from "../../../../interfaces/meal.interface";

import Header from "../../../components/organisms/header/component";
import Body from "../../../components/organisms/body/component";
import MealListItem from "../../../components/molecules/meal_list_item/component";
import Label from "../../../components/atoms/label/component";

import CartListStyle from "./style";

export default function BasketList({ nav }: any) {
  const { container, body, removeBtn, footer, footerLabel, footerPrice } = CartListStyle;
  const [cartItems, setBasketItems] = useRecoilState(cartState);
  const totalPrice = useRecoilValue(totalPriceSelector);

  const removeBasketItem = (meal: IMeal) => {
    setBasketItems((items) => {
      return items.filter((el) => el.id !== meal.id);
    });
  };

  return (
    <View style={container}>
      <View style={body}>
        <FlatList
          data={cartItems}
          renderItem={
            ({ item }) =>
              <MealListItem
                detail={item}
                trailing={
                <TouchableOpacity style={removeBtn} onPress={() => removeBasketItem(item)}>
                  <FontAwesome5Icon name={'trash'} size={20} color={'red'} />
                </TouchableOpacity>
                }
              />
          }
          ListHeaderComponent={
            <Header title={'Shopping Cart'} nav={nav} hasBackBtn={true} hasBasket={false}>
              <Body style={{ height: 55 }} />
            </Header>
          }
        />
      </View>
      <View style={footer}>
        <Label style={footerLabel}>Total: </Label>
        <Label style={footerPrice}>$ {formatPrice(totalPrice)}</Label>
      </View>
    </View>
  );
}
