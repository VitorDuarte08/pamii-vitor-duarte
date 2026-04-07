import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 👇 cada item da lista
type Item = {
  id: number;
  nome: string;
  valor: number;
};

// 👇 props da tabela
type Props = {
  dados: Item[];
};

export default function Tabela({ dados }: Props) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da tabela */}
      <View style={styles.linhaHeader}>
        <Text style={styles.textoHeader}>Nome</Text>
        <Text style={styles.textoHeader}>Valor</Text>
      </View>

      {/* Lista de dados */}
      {dados.map((item) => (
        <View key={item.id} style={styles.linha}>
          <Text>{item.nome}</Text>
          <Text>R$ {item.valor}</Text>
        </View>
      ))}
    </View>
  );
}

// 🎨 estilos da tabela
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  linhaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  textoHeader: {
    fontWeight: 'bold',
  },
});