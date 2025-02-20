import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalheInsumo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detalhe do Insumo (em breve)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default DetalheInsumo;
