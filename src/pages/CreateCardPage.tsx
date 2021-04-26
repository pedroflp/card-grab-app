import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { TextInputMask } from 'react-native-masked-text';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'

import { createNewCard } from '../store/actions/CreateNewCard';

import Card from '../components/Card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ModalAlerts } from '../components/ModalAlerts';
import { useAppContext } from '../context/Context';
import { InputText } from '../components/InputText';


const CreateCardPage: React.FC = () => {
  const navigation = useNavigation();

  const cards = useSelector((state: RootStateOrAny) => state.createCardReducer.data);
  const dispatch = useDispatch();

  const { checkIsCreatingCard } = useAppContext()

  const { 
    newCardName, newCardNumber, newCardUsername, 
    setCardName, setCardNumber, setCardUsername } = useAppContext();

  const [canShowModal, setCanShowModal] = useState(false);

  function goBackCardsPage() {
    navigation.navigate('CardsPage')
    checkIsCreatingCard(false)
  }

  function submitCardCreate() {
    dispatch(createNewCard({
      cardId: (cards.length),
      cardName: newCardName, 
      cardUsername: newCardUsername, 
      cardNumber: newCardNumber,
      hideCardNumber: false,
    }));

    setCanShowModal(true);
    
    setTimeout(() => {
      setCanShowModal(false) 
      navigation.navigate('CardsPage')
      checkIsCreatingCard(false)
      setCardName('') 
      setCardNumber('')
      setCardUsername('')
    }, 5000);

  }

  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.pageContainer}>
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
                hideCardNumber={false}
              />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.formInput}>
                <InputText />
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
         </View>
    </ScrollView>
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

  createCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createCardButton: {
    paddingVertical: 24,
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