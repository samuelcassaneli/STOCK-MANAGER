// screens/FormularioInsumo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormularioInsumo = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [validade, setValidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidadeMedida, setUnidadeMedida] = useState('');
  const [lote, setLote] = useState('');

  const handleSalvar = () => {
    // Aqui você implementará a lógica para salvar o insumo
    console.log('Salvar Insumo:', { nome, validade, quantidade, unidadeMedida, lote });
    navigation.goBack(); // Volta para a tela de listagem
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Insumo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Validade (YYYY-MM-DD)"
        value={validade}
        onChangeText={setValidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Unidade de Medida"
        value={unidadeMedida}
        onChangeText={setUnidadeMedida}
      />
      <TextInput
        style={styles.input}
        placeholder="Lote"
        value={lote}
        onChangeText={setLote}
      />

      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default FormularioInsumo;
