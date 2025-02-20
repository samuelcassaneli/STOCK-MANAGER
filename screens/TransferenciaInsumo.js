// screens/TransferenciaInsumo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const TransferenciaInsumo = ({ navigation }) => {
  const [localOrigem, setLocalOrigem] = useState(''); // Local de Origem
  const [localDestino, setLocalDestino] = useState(''); // Local de Destino
  const [dataTransferencia, setDataTransferencia] = useState(''); // Data da Transferência
  const [itensTransferidos, setItensTransferidos] = useState(''); // Itens Transferidos (JSON)
  const [responsavelTransferencia, setResponsavelTransferencia] = useState(''); // Responsável pela Transferência
  const [observacoes, setObservacoes] = useState(''); // Observações

  const handleRegistrarTransferencia = () => {
    // Lógica para registrar a transferência de insumos (persistência dos dados)
    console.log('Registrar Transferência:', {
      localOrigem, localDestino, dataTransferencia, itensTransferidos, responsavelTransferencia, observacoes
    });
    navigation.goBack(); // Voltar para a tela anterior após o registro
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Transferência de Insumos</Text>

      <TextInput
        style={styles.input}
        placeholder="Local de Origem"
        value={localOrigem}
        onChangeText={setLocalOrigem}
      />
      <TextInput
        style={styles.input}
        placeholder="Local de Destino"
        value={localDestino}
        onChangeText={setLocalDestino}
      />
      <TextInput
        style={styles.input}
        placeholder="Data da Transferência (YYYY-MM-DD)"
        value={dataTransferencia}
        onChangeText={setDataTransferencia}
      />
      <TextInput
        style={styles.input}
        placeholder="Itens Transferidos (JSON)"
        value={itensTransferidos}
        onChangeText={setItensTransferidos}
        multiline // Permite várias linhas (para JSON)
      />
      <TextInput
        style={styles.input}
        placeholder="Responsável pela Transferência"
        value={responsavelTransferencia}
        onChangeText={setResponsavelTransferencia}
      />
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline // Permite várias linhas
      />

      <Button title="Registrar Transferência" onPress={handleRegistrarTransferencia} />
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

export default TransferenciaInsumo;
