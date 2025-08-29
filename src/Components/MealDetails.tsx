import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: any;
  textStyle?: any;
}

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItems, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItems, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItems, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
