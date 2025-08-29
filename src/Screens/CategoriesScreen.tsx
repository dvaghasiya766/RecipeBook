import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import CategoryGridTile from '../Components/CategoryGridTile';
import { CATEGORIES } from '../Data/dummy-data';
import { navigate } from '../Navigation/NavigationServices';
import { Screens } from '../Utils/Constant';

const CategoriesScreen = () => {
  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigate(Screens.MealsOverViewScreen, { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.screen}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootContainer: { paddingBottom: 15 },
  screen: {
    padding: 10,
  },
});
