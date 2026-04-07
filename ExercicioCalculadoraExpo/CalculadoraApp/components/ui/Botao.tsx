import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// 👇 Aqui definimos as "props" (dados que o botão recebe)
type Props = {
  titulo: string;        // texto do botão
  onPress: () => void;   // função ao clicar
  cor?: string;          // cor opcional
};

export default function Botao({ titulo, onPress, cor }: Props) {
  return (
    <TouchableOpacity
      style={[styles.botao, cor ? { backgroundColor: cor } : null]}
      onPress={onPress}
    >
      {/* Texto que aparece no botão */}
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

// 🎨 Estilo do botão
const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});