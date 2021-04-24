import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { TextInputMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'

import { createNewCard } from '../store/actions/CreateNewCard';

import Card from '../components/Card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ModalAlerts } from '../components/ModalAlerts';


const CreateCardPage: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [newCardName, setNewCardName] = useState('');
  const [newCardUsername, setNewCardUsername] = useState('');
  const [newCardNumber, setNewCardNumber] = useState('');

  const [canShowModal, setCanShowModal] = useState(false);

  function goBackCardsPage() {
    navigation.navigate('CardsPage')
  }

  function submitCardCreate() {
    dispatch(createNewCard({
      cardId: 0,
      cardName: newCardName, 
      cardUsername: newCardUsername, 
      cardNumber: newCardNumber,
      hideNumber: false,
    }));

    setCanShowModal(true);

    setTimeout(() => {
      setCanShowModal(false) 
      navigation.navigate('CardsPage')
    }, 5000);

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
            cardId={0}
            cardName={newCardName === '' ? 'Nome do Cartão' : newCardName}
            cardUsername={newCardUsername === '' ? 'Nome Completo' : newCardUsername}
            cardNumber={newCardNumber === '' ? '1234 1234 1234 1234' : newCardNumber}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formInput}>

            <View style={styles.formInputArea}>
                <Text style={styles.formInputLabel}>Nome do cartão</Text>
                <TextInput
                  style={styles.formTextInput} 
                  placeholder='Nome do Cartão' 
                  onChangeText={setNewCardName}
                  maxLength={32}
                />
              </View>

              <View style={styles.formInputArea}>
                <Text style={styles.formInputLabel}>Nome completo</Text>
                <TextInput
                  style={styles.formTextInput} 
                  placeholder='Nome Completo' 
                  onChangeText={setNewCardUsername}
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
                    setNewCardNumber(text.toString())}
                  } 
                />
              </View>
          </View>


          <View style={styles.createCardContainer}>
            <RectButton 
              enabled={
                newCardName.length >= 3 &&
                newCardUsername.length >= 3 &&
                newCardNumber.length === 19 && true
              }
              onPress={submitCardCreate} 
              style={[
                styles.createCardButton,
                
                newCardName.length < 3 ||
                newCardUsername.length < 3 ||
                newCardNumber.length < 19
                ? styles.disabled : styles.enable
              ]}
            >
              <Text style={styles.createCardButtonTitle}>Adicionar</Text>
            </RectButton>
          </View>
        </View>

      {
        canShowModal && <ModalAlerts emoji={'🤑'} message={`Seu cartão ${newCardName}, foi criado!`} />
      }
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
    paddingHorizontal: 30,
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

  createCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createCardButton: {
    paddingVertical: 24,
    paddingHorizontal: 122,
    width: Dimensions.get('window').width*0.85,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    opacity: 0.2,
    alignItems: 'center',
    borderRadius: 10
  },
  enable: {
    opacity: 1,
  },
  disabled: {
    opacity: 0.2,
  },
  createCardButtonTitle: {
    fontSize: 15,
    fontFamily: fonts.heading,
    textTransform: 'uppercase',
    color: colors.white,
  }
})