import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

import { deleteCard, hideNumber } from '../store/cards/actions/card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const ActionButtons: React.FC = ({ card }: any) => {
  const dispatch = useDispatch();
  const activeCard = useSelector((state: RootStateOrAny) => state.cards.activeCard);

  return (
   <>
    <RectButton 
      activeOpacity={0.7} 
      style={styles.button}
      onPress={() => dispatch(hideNumber(activeCard))}
    >
      <Ionicons 
        name={ activeCard.hideNumber ? "eye-outline" : "eye-off-outline"} 
        size={25} 
        style={{ width: 25 }}
        color="#2D2940" 
      /> 
      <Text style={styles.title}>{ activeCard.hideNumber ? 'Mostrar número' : 'Esconder número'}</Text>
    </RectButton>

    <RectButton 
      activeOpacity={0.7} 
      style={[styles.button]}
      onPress={() => dispatch(deleteCard(activeCard))}
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