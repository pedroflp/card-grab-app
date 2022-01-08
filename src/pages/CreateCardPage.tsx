import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'

import { createCard } from '../store/cards/actions/card';

import Card from '../components/Card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ModalAlerts } from '../components/ModalAlerts';
import { InputText } from '../components/InputText';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const INITIAL_CARD_STATE = {
  cardName: '',
  username: '',
  number: '',
  style: {
    cardColor: {
      left: '',
      right: ''
    }
  },
}

type ColorOptionProps = {
  left: string,
  right: string,
}

const CreateCardPage: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [card, setCard] = useState(INITIAL_CARD_STATE)
  const [cardColorsOptions, setCardColorsOptions] = useState<any>([])

  const [loadingColors, setLoadingColors] = useState(false)
  const [canShowModal, setCanShowModal] = useState(false);

  function submitCardCreate() {
    dispatch(createCard({
      cardName: card.cardName, 
      cardUsername: card.username, 
      cardNumber: card.number,
      hideCardNumber: false,
      style: {
        cardColor: {
          left: card.style.cardColor.left,
          right: card.style.cardColor.right
        }
      }
    }));

    setCanShowModal(true);
    
    setTimeout(() => {
      setCard(INITIAL_CARD_STATE)
      navigation.navigate('CardsPage')
      setCanShowModal(false) 
    }, 3000);

  }

  const generateCardColors = () => {
    setLoadingColors(true)
    const getColor = () => {
      const hex = (Math.random()*0xFFFFFF<<0).toString(16);
      return `#${hex}`
    }

    const colors = new Array(20).fill({left: null, right: null})

    setCardColorsOptions(colors.map(() => ({left: getColor(), right: getColor()})))
    setLoadingColors(false)
  }

  useEffect(() => {
    generateCardColors()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
         <KeyboardAvoidingView style={styles.pageContainer}>
          <View style={styles.headerContainer}>
              <RectButton onPress={() => navigation.navigate('CardsPage')} style={{ marginRight: 5 }}>
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
                id={0}
                name={card.cardName || 'Nome do Cartão'}
                username={card.username || 'Nome Completo'}
                number={card.number || '1234 1234 1234 1234'}
                hideNumber={false}
                color={card.style.cardColor}
              />
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.formInputLabel}>Cor do cartão</Text>
              {
                loadingColors ? 
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator color={'#000'} />
                  <Text style={{marginLeft: 8}}>Gerando cores...</Text>
                </View>
                : (
                  <>
                    <View style={styles.cardColorContainer}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {cardColorsOptions.map((color: ColorOptionProps) => (
                          <TouchableOpacity onPress={() => setCard({...card, style: { cardColor: color}})}>
                            <LinearGradient style={styles.cardColorOption} colors={[color.left, color.right]} />
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                      <TouchableOpacity onPress={generateCardColors} style={{marginLeft: 10}}>
                        <Ionicons name='reload' size={16} />
                      </TouchableOpacity>
                    </View>
                  </>
                )
              }
              <View style={styles.formInput}>
                <InputText 
                  cardName={card.cardName} 
                  username={card.username} 
                  number={card.number} 
                  setCard={setCard} 
                />
              </View>

              <View style={styles.createCardContainer}>
                <RectButton 
                  enabled={
                    card.cardName.length >= 3 &&
                    card.username.length >= 3 &&
                    card.number.length === 19 && true
                  }
                  onPress={submitCardCreate} 
                  style={[
                    styles.createCardButton,
                    
                    card.cardName.length < 3 ||
                    card.username.length < 3 ||
                    card.number.length < 19
                    ? styles.disabled : styles.enable
                  ]}
                >
                  <Text style={styles.createCardButtonTitle}>Adicionar</Text>
                </RectButton>
              </View>
            </View>

          {canShowModal && <ModalAlerts emoji={'🤑'} message={`Seu cartão ${card.cardName}, foi criado!`} />}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>  
  );
}

export { CreateCardPage };

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
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

  cardColorContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardColorOption: {
    width: 25,
    height: 25,
    borderRadius: 300,
    margin: 9,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  formInput: {
    marginBottom: 50,
  },
  formInputLabel: {
    fontFamily: fonts.heading,
    fontSize: 9,
    textTransform: 'uppercase'
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