import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MenuTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Estoque</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ListaInsumos')}
      >
        <Text style={styles.buttonText}>Listar Insumos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EntradaInsumo')}
      >
        <Text style={styles.buttonText}>Registrar Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SaidaInsumo')}
      >
        <Text style={styles.buttonText}>Registrar Saída</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CompraInsumo')}
      >
        <Text style={styles.buttonText}>Registrar Compra</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TransferenciaInsumo')}
      >
        <Text style={styles.buttonText}>Transferir Insumo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MenuTela;
