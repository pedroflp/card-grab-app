import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useAppContext } from '../context/Context';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = {
  cardName: string,
  username: string,
  number: string,
  setCard: Function,
}

const InputText: React.FC<Props> = ({cardName, username, number, setCard}: any) => {

  return (
  <>

  <View style={styles.formInputArea}>
    <Text style={styles.formInputLabel}>Nome do cartão</Text>
    <TextInput
      style={styles.formTextInput} 
      placeholder='Nome do Cartão' 
      value={cardName}
      onChangeText={(text) => setCard((state: any) => ({ ...state, cardName: text }))}
      maxLength={32}
    />
  </View>

  <View style={styles.formInputArea}>
    <Text style={styles.formInputLabel}>Nome completo</Text>
    <TextInput
      style={styles.formTextInput} 
      placeholder='Nome Completo' 
      value={username}
      onChangeText={(text) => setCard((state: any) => ({ ...state, username: text }))}
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
      value={number}
      onChangeText={(text) => {
        setCard((state: any) => ({ ...state, number: text.toString() }))}
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