import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useAppContext } from '../context/Context';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


const InputText: React.FC = () => {
  const { newCardName, newCardUsername, newCardNumber, setCardName, setCardUsername, setCardNumber } = useAppContext();

  return (
  <>

  <View style={styles.formInputArea}>
    <Text style={styles.formInputLabel}>Nome do cartão</Text>
    <TextInput
      style={styles.formTextInput} 
      placeholder='Nome do Cartão' 
      onChangeText={setCardName}
      value={newCardName}
      maxLength={32}
    />
  </View>

  <View style={styles.formInputArea}>
    <Text style={styles.formInputLabel}>Nome completo</Text>
    <TextInput
      style={styles.formTextInput} 
      placeholder='Nome Completo' 
      onChangeText={setCardUsername}
      value={newCardUsername}
      maxLength={30}
    />
  </View>

  <View style={styles.formInputArea}>
    <Text style={styles.formInputLabel}>Número</Text>
    <TextInputMask
      style={styles.formTextInput}
      placeholder='Número'
      type={'credit-card'}
      options={{
        obfuscated: false,
      }}
      value={newCardNumber}
      onChangeText={(text) => {
        setCardNumber(text.toString())}
      } 
    />
  </View>

  </>
  );
}

export { InputText };

const styles = StyleSheet.create({
  formInputArea: {
    marginTop: 15,
  },
  formInputLabel: {
    fontFamily: fonts.heading,
    fontSize: 9,
    textTransform: 'uppercase'
  },
  formTextInput: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 10,
    marginTop: 5,
  },
})