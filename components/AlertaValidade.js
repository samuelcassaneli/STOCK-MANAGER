import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format, isPast, isWithinInterval, addDays, differenceInDays } from 'date-fns'; // Importe o differenceInDays
import { ptBR } from 'date-fns/locale';

const AlertaValidade = ({ insumo }) => {
  const dataValidade = new Date(insumo.validade);
  const hoje = new Date();
  const diasParaVencer = differenceInDays(dataValidade, hoje); // Use a função corretamente

  if (diasParaVencer <= 30 && diasParaVencer >= 0) { // Vence em 30 dias ou menos
    return (
      <View style={styles.alerta}>
        <Text style={styles.textoAlerta}>
          Insumo {insumo.nome} vence em {diasParaVencer} dias!
        </Text>
      </View>
    );
  } else if (isPast(dataValidade)) { // Já venceu
    return (
      <View style={styles.alertaUrgente}>
        <Text style={styles.textoAlerta}>
          URGENTE: Insumo {insumo.nome} VENCIDO!
        </Text>
      </View>
    );
  } else {
    return null; // Não exibe nada se a validade estiver OK
  }
};

const styles = StyleSheet.create({
  alerta: {
    backgroundColor: '#FFFF00', // Amarelo
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  alertaUrgente: {
    backgroundColor: '#FF0000', // Vermelho
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  textoAlerta: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default AlertaValidade;
