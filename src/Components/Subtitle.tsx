import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface SubTitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubTitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: '#ecd8d8',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: '#444',
    fontSize: 18,
    margin: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
