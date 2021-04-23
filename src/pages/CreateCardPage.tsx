import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { MaterialIcons  } from '@expo/vector-icons'

import AddCardButton from '../components/AddCardButton';
import Card from '../components/Card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


const CreateCardPage: React.FC = () => {
  const navigation = useNavigation();

  const [cardName, setCardName] = useState('');
  const [cardUsername, setCardUsername] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  function goBackCardsPage() {
    navigation.navigate('CardsPage')
  }
    
  return (
    <SafeAreaView>
      <KeyboardAvoidingView 
        style={styles.pageContainer}
        behavior={ Platform.OS === 'ios' ? 'height' : 'padding' }
      >
        <View style={styles.headerContainer}>
          <RectButton onPress={goBackCardsPage} style={{ marginRight: 5 }}>
            <MaterialIcons 
              name="keyboard-arrow-left" 
              size={30} 
              color="black" 
            />
          </RectButton>
          <Text style={styles.headerTitle}>Adicionar cartão</Text>
        </View>

        <View style={styles.cardContainer}>
          <Card 
            cardName={cardName === '' ? 'Nome do Cartão' : cardName}
            cardUsername={cardUsername === '' ? 'Nome Completo' : cardUsername}
            cardNumber={cardNumber === '' ? '1234 1234 1234 1234' : cardNumber}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formInput}>

            <View style={styles.formInputArea}>
                <Text style={styles.formInputLabel}>Nome do cartão</Text>
                <TextInput
                  style={styles.formTextInput} 
                  placeholder='Nome do Cartão' 
                  onChangeText={setCardName}
                  maxLength={32}
                />
              </View>

              <View style={styles.formInputArea}>
                <Text style={styles.formInputLabel}>Nome completo</Text>
                <TextInput
                  style={styles.formTextInput} 
                  placeholder='Nome Completo' 
                  onChangeText={setCardUsername}
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
                  value={cardNumber}
                  onChangeText={(text) => {
                    setCardNumber(text.toString())}
                  } 
                />
              </View>
          </View>

          <AddCardButton />
        </View>
     </KeyboardAvoidingView>
  </SafeAreaView>  
  );
}

export { CreateCardPage };

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 30,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: fonts.heading,
    fontSize: 20
  },

  cardContainer: {
    marginVertical: 34,
    paddingHorizontal: 20,
  },

  formContainer: {
    paddingHorizontal: 30,
  },
  formInput: {
    marginBottom: 50,
  },
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