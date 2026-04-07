import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';

// 👇 props do modal
type Props = {
  visivel: boolean;
  titulo: string;
  children: React.ReactNode;
};

export default function ModalCustom({ visivel, titulo, children }: Props) {
  return (
    <Modal visible={visivel} transparent animationType="slide">
      <View style={styles.fundo}>
        <View style={styles.modal}>
          {/* título do modal */}
          <Text style={styles.titulo}>{titulo}</Text>

          {/* conteúdo interno */}
          {children}
        </View>
      </View>
    </Modal>
  );
}

// 🎨 estilo do modal
const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});