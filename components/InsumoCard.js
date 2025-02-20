// components/InsumoCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InsumoCard = ({ insumo }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{insumo.nome}</Text>
      <Text>Validade: {insumo.validade}</Text>
      <Text>Quantidade: {insumo.quantidade} {insumo.unidade_medida}</Text>
      {/* Adicione outros campos aqui... */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InsumoCard;
