// Importa componentes básicos do React Native (texto, tela, input, estilo e botão customizado)
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

// Importa o useState (serve pra guardar e atualizar valores na tela)
import { useState } from 'react';


// Função principal da tela (é o "componente" do app)
export default function HomeScreen() {

  // Cria um estado para o primeiro número (n1)
  const [n1, setN1] = useState('');

  // Cria um estado para o segundo número (n2)
  const [n2, setN2] = useState('');

  // Cria um estado para guardar o resultado
  const [resultado, setResultado] = useState(0);


  return (
    // View = tipo uma "div" (container da tela)
    <View style={styles.container}>

      {/* Título da calculadora */}
      <Text style={styles.titulo}>Calculadora</Text>


      {/* Campo para digitar o primeiro número */}
      <TextInput
        style={styles.input} // estilo
        placeholder="Primeiro número" // texto de dica
        keyboardType="numeric" // só aceita número
        value={n1} // valor atual
        onChangeText={setN1} // atualiza o valor quando digita
      />

      {/* Campo para digitar o segundo número */}
      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={n2}
        onChangeText={setN2}
      />


      {/* Área dos botões */}
      <View style={styles.botoes}>

        {/* Botão de SOMA */}
        <Pressable
          style={styles.botao}
          onPress={() => setResultado(Number(n1) + Number(n2))} // faz a conta
        >
          <Text style={styles.botaoTexto}>+</Text>
        </Pressable>

        {/* Botão de SUBTRAÇÃO */}
        <Pressable
          style={styles.botao}
          onPress={() => setResultado(Number(n1) - Number(n2))}
        >
          <Text style={styles.botaoTexto}>-</Text>
        </Pressable>

        {/* Botão de MULTIPLICAÇÃO */}
        <Pressable
          style={styles.botao}
          onPress={() => setResultado(Number(n1) * Number(n2))}
        >
          <Text style={styles.botaoTexto}>×</Text>
        </Pressable>

        {/* Botão de DIVISÃO */}
        <Pressable
          style={styles.botao}
          onPress={() => setResultado(Number(n1) / Number(n2))}
        >
          <Text style={styles.botaoTexto}>÷</Text>
        </Pressable>

      </View>


      {/* Mostra o resultado na tela */}
      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>

    </View>
  );
}


// Estilos da tela (tipo CSS)
const styles = StyleSheet.create({

  // Estilo da tela inteira
  container: {
    flex: 1, // ocupa a tela toda
    justifyContent: 'center', // centraliza vertical
    alignItems: 'center', // centraliza horizontal
    padding: 20,
    backgroundColor: '#1e1e2f', // cor de fundo escura
  },

  // Estilo do título
  titulo: {
    fontSize: 32,
    marginBottom: 20,
    color: '#fff', // branco
    fontWeight: 'bold',
  },

  // Estilo dos inputs
  input: {
    borderWidth: 1,
    width: 220,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  // Área dos botões
  botoes: {
    flexDirection: 'row', // deixa os botões lado a lado
    gap: 10,
    marginTop: 10,
  },

  // Estilo do botão
  botao: {
    backgroundColor: '#00bcd4',
    padding: 10,
    borderRadius: 8,
  },

  // Texto do botão
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Resultado
  resultado: {
    fontSize: 26,
    marginTop: 20,
    color: '#00ffcc',
    fontWeight: 'bold',
  },
});

//“Usei React Native com useState para controlar os valores”
//“Os inputs capturam os números”
//“Os botões executam operações matemáticas”
//“O resultado é atualizado dinamicamente na tela”
//“Personalizei o layout com estilos”