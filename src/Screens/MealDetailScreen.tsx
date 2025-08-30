import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MEALS } from '../Data/dummy-data';
import IconButton from '../Components/IconButton';
import MealDetails from '../Components/MealDetails';
import Subtitle from '../Components/Subtitle';
import List from '../Components/List';
import { addFavorite, removeFavorite } from '../Store/Redux/Favorites';
import { RootState } from '../Store/Redux/Store';
// import { FavoritesContext } from '../Store/Context/FavoritesContext';

interface MealDetailScreenProps {
  route: any;
  navigation: any;
}

const MealDetailScreen = ({ route, navigation }: MealDetailScreenProps) => {
  // const favoritMealsContext = useContext(FavoritesContext);
  // const mealIsFavorite = favoritMealsContext.isFavorite(mealId);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const favoritMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids,
  );
  const dispatch = useDispatch();

  const mealIsFavorite = favoritMealIds.includes(mealId);
  console.log('mealIsFavorite', mealIsFavorite);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoritMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoritMealsContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="#555"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  if (!selectedMeal) {
    return <Text>Meal not found</Text>;
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title} </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: { width: '100%', height: 350 },
  title: { fontSize: 24, fontWeight: 'bold', margin: 8, textAlign: 'center' },
  detailText: { color: '#555' },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: { width: '80%', margin: 8, padding: 8 },
});
