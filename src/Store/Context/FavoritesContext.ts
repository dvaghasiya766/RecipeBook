import { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of the context
export interface FavoritesContextType {
  favorites: string[];
  totalFavorites: number;
  addFavorite: (mealId: string) => void;
  removeFavorite: (mealId: string) => void;
  isFavorite: (mealId: string) => boolean;
}

// This is the context VALUE (default values)
export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

// Create a custom hook for easier consumption
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
