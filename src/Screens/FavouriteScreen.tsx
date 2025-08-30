import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MealsList from '../Components/MealsList';
import { useFavorites } from '../Store/Context/FavoritesContext';
import { MEALS } from '../Data/dummy-data';
import { Colors } from '../Utils/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Redux/Store';

const FavouriteScreen = () => {
  // const { favorites } = useFavorites();
  const favorites = useSelector((state: RootState) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal => favorites.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.messageText}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
});
