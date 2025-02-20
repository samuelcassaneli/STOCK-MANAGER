import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const EntradaInsumo = ({ navigation }) => {
  const [dataEntrada, setDataEntrada] = useState(''); // Data de Entrada
  const [quantidadeRecebida, setQuantidadeRecebida] = useState(''); // Quantidade Recebida
  const [lote, setLote] = useState(''); // Lote
  const [validade, setValidade] = useState(''); // Validade
  const [fornecedor, setFornecedor] = useState(''); // Fornecedor
  const [notaFiscal, setNotaFiscal] = useState(''); // N° da Nota Fiscal
  const [observacoes, setObservacoes] = useState(''); // Observações

  const handleRegistrarEntrada = () => {
    // Lógica para registrar a entrada do insumo (persistência dos dados)
    console.log('Registrar Entrada:', {
      dataEntrada, quantidadeRecebida, lote, validade, fornecedor, notaFiscal, observacoes,
    });
    navigation.goBack(); // Voltar para a tela anterior após o registro
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Entrada de Insumo</Text>

      <TextInput
        style={styles.input}
        placeholder="Data de Entrada (YYYY-MM-DD)"
        value={dataEntrada}
        onChangeText={setDataEntrada}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade Recebida"
        value={quantidadeRecebida}
        onChangeText={setQuantidadeRecebida}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Lote"
        value={lote}
        onChangeText={setLote}
      />
      <TextInput
        style={styles.input}
        placeholder="Validade (YYYY-MM-DD)"
        value={validade}
        onChangeText={setValidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Fornecedor"
        value={fornecedor}
        onChangeText={setFornecedor}
      />
      <TextInput
        style={styles.input}
        placeholder="Nº da Nota Fiscal"
        value={notaFiscal}
        onChangeText={setNotaFiscal}
      />
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline // Permite várias linhas
      />

      <Button title="Registrar Entrada" onPress={handleRegistrarEntrada} />
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

export default EntradaInsumo;
