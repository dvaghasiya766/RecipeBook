import { StyleSheet, Text, View } from 'react-native';
import React, { Children, useState } from 'react';
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (mealId: string) => {
    setFavorites(prev => [...prev, mealId]);
  };

  const removeFavorite = (mealId: string) => {
    setFavorites(prev => prev.filter(id => id !== mealId));
  };

  const isFavorite = (mealId: string) => {
    return favorites.includes(mealId);
  };

  const value: FavoritesContextType = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

const styles = StyleSheet.create({});
