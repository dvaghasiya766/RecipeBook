import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Screens } from '../Utils/Constant';
import {
  CategoriesScreen,
  MealDetailScreen,
  MealsOverViewScreen,
  FavouriteScreen,
} from '../Screens';
import { Colors } from '../Utils/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useWindowDimensions } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

export type RootStackParamList = {
  DrawerNavigation: undefined;
  MealDetailScreen: { mealId: string };
  MealsOverViewScreen: { categoryId: string };
};

export type DrawerParamList = {
  CategoriesScreen: undefined;
  FavouriteScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName={Screens.CategoriesScreen}
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.text,
        sceneStyle: { backgroundColor: Colors.white },
        drawerItemStyle: {
          borderRadius: 5,
          opacity: 0.9,
        },
        drawerContentStyle: { backgroundColor: Colors.primary },
        drawerInactiveTintColor: Colors.inactive,
        drawerActiveTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.activeBackground,
        drawerStyle: isLargeScreen ? null : { width: '80%' },
      }}
    >
      <Drawer.Screen
        name={Screens.CategoriesScreen}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerLabel: 'Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name={'list'} // filled vs normal
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={Screens.FavouriteScreen}
        component={FavouriteScreen}
        options={{
          title: 'Favorite Items',
          drawerLabel: 'My Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name={'star'} // filled vs normal
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Screens.DrawerNavigation}
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary }, // ✅ themed
          headerTintColor: Colors.text, // ✅ themed
          contentStyle: { backgroundColor: Colors.white }, // ✅ themed
          // 👇 Added animation options
          animation: 'ios_from_right',
        }}
      >
        <Stack.Screen
          component={DrawerNavigation}
          name={Screens.DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={MealsOverViewScreen}
          name={Screens.MealsOverViewScreen}
        />
        <Stack.Screen
          component={MealDetailScreen}
          name={Screens.MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
