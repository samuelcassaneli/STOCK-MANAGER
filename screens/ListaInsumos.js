// screens/ListaInsumos.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import InsumoCard from '../components/InsumoCard';
import Insumo from '../model/Insumo';
import AlertaValidade from '../components/AlertaValidade'; // Importe o componente

const ListaInsumos = ({ navigation }) => {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    // SIMULANDO A BUSCA DE DADOS (substituir por sua lógica real)
    const mockInsumos = [
      new Insumo(1, 'Ácido Sulfúrico', 'Solução para testes', '2024-12-31', 10, 'Litros', 'LOTE123', '2023-01-15', null, 'ACME Inc.', 50.00, null, null),
      new Insumo(2, 'Hidróxido de Sódio', 'Base forte para limpeza', '2023-07-01', 5, 'Kg', 'LOTE456', '2023-02-20', null, 'XYZ Chemicals', 75.00, null, null),  // VALIDADE PRÓXIMA
      new Insumo(3, 'Álcool Isopropílico', 'Solvente para limpeza', '2022-02-10', 20, 'Litros', 'LOTE789', '2023-03-25', null, 'ABC Solutions', 35.00, null, null),  // VENCIDO
      // Adicione mais insumos aqui...
    ];
    setInsumos(mockInsumos);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={insumos}
        renderItem={({ item }) => (
          <View>
            <AlertaValidade insumo={item} />
            <InsumoCard insumo={item} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Button
        title="Adicionar Insumo"
        onPress={() => navigation.navigate('FormularioInsumo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ListaInsumos;
