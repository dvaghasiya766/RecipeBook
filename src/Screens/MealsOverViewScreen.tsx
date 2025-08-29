import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, DrawerParamList } from '../Navigation/Navigation'; // adjust path
import { Screens } from '../Utils/Constant';
import { CATEGORIES, MEALS } from '../Data/dummy-data';
import Category from '../models/category';
import MealItem from '../Components/MealItem';
import Meal from '../models/meal';

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

  const renderMealItem = ({ item }: { item: Meal }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
