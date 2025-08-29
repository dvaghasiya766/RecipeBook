import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ListProps {
  data: string[];
}

const List = ({ data }: ListProps) => {
  return data.map(dataPoint => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e0f7fa',
  },
  itemText: {
    color: '#666',
    textAlign: 'center',
  },
});
