import {ScrollView, View} from "react-native";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {cartState} from "../../../../atoms/cart";

import {copyWith, formatPrice} from "../../../../util/functions";
import IMeal from "../../../../interfaces/meal.interface";

import Header from "../../../components/organisms/header/component";
import Body from "../../../components/organisms/body/component";
import Label from "../../../components/atoms/label/component";
import Badge from "../../../components/atoms/badge/component";
import Inkwell from "../../../components/atoms/inkwell/component";

import MealDetailStyle from "./style";
import Theme from "../../../theme";

export default function MealDetails({nav, params}: any) {
  const meal: IMeal = params;
  const [cartItems, setBasketItems] = useRecoilState(cartState);
  const [itemExists, setExistence] = useState(false);

  useEffect(() => {
    setExistence(itemExistsInBasket(meal));
  },[cartItems]);

  const itemExistsInBasket = (meal: IMeal) => cartItems.some((el) => meal.id == el.id);

  const addBasketItem = (meal: IMeal) => {
    setBasketItems((items) => {
      if(!items.some((el) => el.id == meal.id)) {
        return [...items, meal];
      }

      return items;
    });
  };

  const removeBasketItem = (meal: IMeal) => {
    setBasketItems((items) => {
      return items.filter((el) => el.id !== meal.id);
    });
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Header
          nav={nav}
          title={''}
          hasBasket={false}
          hasBackBtn={true}
          style={{height: 300}}
          backgroundImage={meal.thumbnail}
        />

        <Body style={MealDetailStyle.bodyContainer}>
          <View style={MealDetailStyle.titleContainer}>
            <Label style={MealDetailStyle.title}>{meal.name}</Label>
            <Label style={MealDetailStyle.price}>$ {formatPrice(meal.price)}</Label>
          </View>

          <Label style={MealDetailStyle.subText}>{meal.region}, {meal.category} dish</Label>

          <ScrollView style={{marginVertical: 20}} horizontal={true}>
            {
              meal.tags.length == 0 && (
                <Badge
                  style={copyWith([MealDetailStyle.badgeContainer, {backgroundColor: Theme.error}])}
                  contentStyle={MealDetailStyle.badgeText}
                >
                  No tags
                </Badge>
              )
            }

            {
              meal.tags.map((tag) =>
                <Badge
                  key={tag}
                  style={MealDetailStyle.badgeContainer}
                  contentStyle={MealDetailStyle.badgeText}
                >
                  {tag}
                </Badge>
              )
            }
          </ScrollView>

          <View>
            <Label style={MealDetailStyle.title}>Ingredients</Label>
            <Label style={MealDetailStyle.subText}>{meal.ingredients.join(', ')}</Label>
          </View>

          {!itemExists && (
            <Inkwell
              title={'Add to cart'}
              style={MealDetailStyle.buyBtn}
              titleStyle={MealDetailStyle.btnText}
              onPress={() => addBasketItem(meal)}
            />
          )}

          {itemExists && (
            <Inkwell
              title={'Remove from cart'}
              style={MealDetailStyle.removeBtn}
              titleStyle={MealDetailStyle.btnText}
              onPress={() => removeBasketItem(meal)}
            />
          )}
        </Body>
      </ScrollView>
    </View>
  );
}
