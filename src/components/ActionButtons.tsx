import React, { useState } from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

import { deleteCardAction } from '../store/actions/DeleteCard';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { toggleViewNumberCard } from '../store/actions/toggleViewNumberCard';
import { useAppContext } from '../context/Context';
import { createNewCard } from '../store/actions/CreateNewCard';

type Props = {
  activeCard: number,
}

type Card = {
  cardId: number,
  cardName: string, 
  cardUsername: string, 
  cardNumber: string,
  hideCardNumber: boolean,
}

const ActionButtons: React.FC<Props> = (props) => {
  const cards = useSelector((state: RootStateOrAny) => state.createCardReducer.data);
  const dispatch = useDispatch();
  
  const { hideCardNumber, toogleHideCardNumber } = useAppContext();
  
  function handleDeleteCard() {
    dispatch(deleteCardAction({type: 'DELETE_CARD'}))
  }

  function createcards() {
    dispatch(createNewCard({
      cardId: (cards.length),
      cardName: 'newCardName', 
      cardUsername: 'newCardUsername', 
      cardNumber: 'newCardNumber',
      hideCardNumber: false,
    }));
  }

  function showcards() {
    cards.map((card: Card) => {     
      console.log(card);
      
    })
  }

  return (
   <>
    <RectButton onPress={() => toogleHideCardNumber()} activeOpacity={0.7} style={styles.button}>
      <Ionicons 
        name={ hideCardNumber ? "eye-outline" : "eye-off-outline"} 
        size={25} 
        style={{ width: 25 }}
        color="#2D2940" 
      /> 
      <Text style={styles.title}>{ hideCardNumber ? 'Mostrar número' : 'Esconder número'}</Text>
    </RectButton>

    <RectButton 
      enabled={false}
      onPress={handleDeleteCard} 
      activeOpacity={0.7} 
      style={[styles.button, styles.disabled]}
    >
      <Octicons 
        name="trashcan" 
        size={25} 
        style={{ width: 25 }}
        color="red" 
      />
      <Text style={styles.titleRed}>Apagar cartão</Text>
    </RectButton>
   </>
  );
}

export { ActionButtons };

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.84,
    height: 65,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 8,
    padding: 25,
    borderRadius: 10,
  },
  disabled: {
    opacity: 0.4,
  },
  title: {
    marginLeft: 22,
    fontFamily: fonts.heading,
    textTransform: 'uppercase',
    color: colors.textComplement,
  }, 
  titleRed: {
    marginLeft: 22,
    fontFamily: fonts.heading,
    textTransform: 'uppercase',
    color: colors.red,
  }
})