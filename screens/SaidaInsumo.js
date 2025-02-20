// screens/SaidaInsumo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SaidaInsumo = ({ navigation }) => {
  const [dataSaida, setDataSaida] = useState(''); // Data de Saída
  const [quantidadeRetirada, setQuantidadeRetirada] = useState(''); // Quantidade Retirada
  const [responsavelRetirada, setResponsavelRetirada] = useState(''); // Responsável pela Retirada
  const [observacoes, setObservacoes] = useState(''); // Observações

  const handleRegistrarSaida = () => {
    // Lógica para registrar a saída do insumo (persistência dos dados)
    console.log('Registrar Saída:', {
      dataSaida, quantidadeRetirada, responsavelRetirada, observacoes
    });
    navigation.goBack(); // Voltar para a tela anterior após o registro
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Saída de Insumo</Text>

      <TextInput
        style={styles.input}
        placeholder="Data de Saída (YYYY-MM-DD)"
        value={dataSaida}
        onChangeText={setDataSaida}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade Retirada"
        value={quantidadeRetirada}
        onChangeText={setQuantidadeRetirada}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Responsável pela Retirada"
        value={responsavelRetirada}
        onChangeText={setResponsavelRetirada}
      />
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline // Permite várias linhas
      />

      <Button title="Registrar Saída" onPress={handleRegistrarSaida} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para o ScrollView funcionar corretamente
    padding: 20,
    justifyContent: 'flex-start', // Alinha o conteúdo no topo
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

export default SaidaInsumo;
