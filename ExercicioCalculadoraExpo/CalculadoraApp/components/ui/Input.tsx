import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// 👇 Props do input
type Props = {
  placeholder: string;  // texto de dica
  value: string;         // valor digitado
  onChangeText: (text: string) => void; // quando digita
};

export default function Input({ placeholder, value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

// 🎨 estilo do input
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
  },
});