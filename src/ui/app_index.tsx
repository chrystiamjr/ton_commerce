import {useEffect} from "react";
import {useRecoilState} from "recoil";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';

import MealsProvider from "../providers/meals_provider";
import {mealsState} from "../atoms/meals";
import {loaderState} from "../atoms/loader";

import MealList from "./screens/meals/meal_list/view";
import BaseView from "./components/organisms/base_view/component";
import MealDetails from "./screens/meals/meal_details/view";
import BasketList from "./screens/cart/cart_list/view";

const Stack = createNativeStackNavigator();
export default function AppIndex() {
  const [meals, setMeals] = useRecoilState(mealsState);
  const [_, setLoader] = useRecoilState(loaderState);

  useEffect(() => {
    setLoader(true);

    MealsProvider.fetchMeals().then((response) => {
      setMeals(response);
      setLoader(false);
    });
  }, []);

  const headerOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: 'transparent'
    }
  };

  const MealListScreen = ({navigation}: any) => <MealList nav={navigation} items={meals}/>;
  const MealDetailsScreen = ({navigation, route}: any) => <MealDetails nav={navigation} {...route}/>;
  const BasketDetailsScreen = ({navigation}: any) => <BasketList nav={navigation}/>;
  return (
    <BaseView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealList" screenOptions={headerOptions}>
          <Stack.Screen name="MealList" component={MealListScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          <Stack.Screen name="BasketList" component={BasketDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BaseView>
  );
}
