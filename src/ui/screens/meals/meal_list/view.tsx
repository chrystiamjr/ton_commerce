import {FlatList, TouchableOpacity, View} from "react-native";

import IMeal from "../../../../interfaces/meal.interface";

import Header from "../../../components/organisms/header/component";
import Body from "../../../components/organisms/body/component";
import MealListItem from "../../../components/molecules/meal_list_item/component";

export default function MealList({ nav, items = [] as IMeal[] }: any) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <FlatList
        data={items}
        renderItem={
          ({ item }) =>
            <TouchableOpacity onPress={() => nav.navigate('MealDetails', item)}>
              <MealListItem detail={item}></MealListItem>
            </TouchableOpacity>
        }
        ListHeaderComponent={
          <Header nav={nav}>
            <Body style={{ height: 55 }} />
          </Header>
        }
      />
    </View>
  );
}
