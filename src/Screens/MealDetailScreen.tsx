import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '../Data/dummy-data';
import IconButton from '../Components/IconButton';
import MealDetails from '../Components/MealDetails';
import Subtitle from '../Components/Subtitle';
import List from '../Components/List';

interface MealDetailScreenProps {
  route: any;
  navigation: any;
}

const MealDetailScreen = ({ route, navigation }: MealDetailScreenProps) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log('Pressed!');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="#555"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, selectedMeal]);

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
