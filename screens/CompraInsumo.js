// screens/CompraInsumo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const CompraInsumo = ({ navigation }) => {
  const [fornecedor, setFornecedor] = useState(''); // Fornecedor
  const [dataCompra, setDataCompra] = useState(''); // Data da Compra
  const [notaFiscal, setNotaFiscal] = useState(''); // N° da Nota Fiscal
  const [itensComprados, setItensComprados] = useState(''); // Lista de Itens Comprados (pode ser um JSON stringificado)
  const [valorTotal, setValorTotal] = useState(''); // Valor Total da Compra
  const [observacoes, setObservacoes] = useState(''); // Observações

  const handleRegistrarCompra = () => {
    // Lógica para registrar a compra de insumos (persistência dos dados)
    console.log('Registrar Compra:', {
      fornecedor, dataCompra, notaFiscal, itensComprados, valorTotal, observacoes,
    });
    navigation.goBack(); // Voltar para a tela anterior após o registro
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Compra de Insumos</Text>

      <TextInput
        style={styles.input}
        placeholder="Fornecedor"
        value={fornecedor}
        onChangeText={setFornecedor}
      />
      <TextInput
        style={styles.input}
        placeholder="Data da Compra (YYYY-MM-DD)"
        value={dataCompra}
        onChangeText={setDataCompra}
      />
      <TextInput
        style={styles.input}
        placeholder="Nº da Nota Fiscal"
        value={notaFiscal}
        onChangeText={setNotaFiscal}
      />
      <TextInput
        style={styles.input}
        placeholder="Itens Comprados (JSON)"
        value={itensComprados}
        onChangeText={setItensComprados}
        multiline // Permite várias linhas (para JSON)
      />
      <TextInput
        style={styles.input}
        placeholder="Valor Total da Compra"
        value={valorTotal}
        onChangeText={setValorTotal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline // Permite várias linhas
      />

      <Button title="Registrar Compra" onPress={handleRegistrarCompra} />
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

export default CompraInsumo;
