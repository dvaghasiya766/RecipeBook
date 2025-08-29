import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import React from 'react';

interface IconButtonProps {
  onPress: () => void;
  icon: any;
  color: string;
}

const IconButton = ({ onPress, icon, color }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.press}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  press: {
    opacity: 0.7, // Slight fade effect on iOS (since ripple is Android only)
    transform: [{ scale: 0.9 }], // Button slightly shrinks while pressed
  },
});
