import React, { useLayoutEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, DrawerParamList } from '../Navigation/Navigation'; // adjust path
import { Screens } from '../Utils/Constant';
import { CATEGORIES, MEALS } from '../Data/dummy-data';
import MealsList from '../Components/MealsList';

type MealsOverViewScreenRouteProp = RouteProp<
  RootStackParamList,
  Screens.MealsOverViewScreen
>;

interface MealsOverViewScreenProps {
  navigation?: any;
}

const MealsOverViewScreen = ({ navigation }: MealsOverViewScreenProps) => {
  const route = useRoute<MealsOverViewScreenRouteProp>();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle: string | undefined =
      CATEGORIES.find(category => category.id === catId)?.title ?? 'Unknown';
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverViewScreen;
