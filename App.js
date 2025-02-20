import 'react-native-gesture-handler'; // Importante: Importe no topo!
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MenuTela from './screens/MenuTela';
import ListaInsumos from './screens/ListaInsumos';
import DetalheInsumo from './screens/DetalheInsumo';
import FormularioInsumo from './screens/FormularioInsumo';
import EntradaInsumo from './screens/EntradaInsumo';
import SaidaInsumo from './screens/SaidaInsumo';
import CompraInsumo from './screens/CompraInsumo';
import TransferenciaInsumo from './screens/TransferenciaInsumo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuTela} options={{ title: 'Menu Principal' }} />
          <Stack.Screen name="ListaInsumos" component={ListaInsumos} options={{ title: 'Listagem de Insumos' }} />
          <Stack.Screen name="DetalheInsumo" component={DetalheInsumo} options={{ title: 'Detalhe do Insumo' }} />
          <Stack.Screen name="FormularioInsumo" component={FormularioInsumo} options={{ title: 'Adicionar Insumo' }} />
          <Stack.Screen name="EntradaInsumo" component={EntradaInsumo} options={{ title: 'Adicionar Entrada' }} />
          <Stack.Screen name="SaidaInsumo" component={SaidaInsumo} options={{ title: 'Adicionar Saída' }} />
          <Stack.Screen name="CompraInsumo" component={CompraInsumo} options={{ title: 'Adicionar Compra' }} />
          <Stack.Screen name="TransferenciaInsumo" component={TransferenciaInsumo} options={{ title: 'Adicionar Transferência' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
