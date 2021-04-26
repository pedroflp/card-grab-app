import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppContext } from '../context/Context';
import { CardFlag } from './CardFlag';

type CardProps = {
  cardId: number,
  cardName: string,
  cardUsername: string,
  cardNumber: string,
  hideCardNumber: boolean,
}

const Card: React.FC<CardProps> = (props) => {
  const { isCreatingCard, hideCardNumber } = useAppContext()


  return (
      <LinearGradient 
      colors={['#FC6767b3', '#EC008Cb5']} 
      start={[0,1]}
      end={[1,0]}
      style={styles.card}
      key={props.cardNumber}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardName}>{props.cardName}</Text>
        <CardFlag cardNumber={props.cardNumber} />
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.cardUsername}>{props.cardUsername}</Text>
        <Text style={styles.cardNumber}>
          { 
            hideCardNumber && !isCreatingCard ? '**** **** **** ****' 
            : hideCardNumber && isCreatingCard ? props.cardNumber 
            : props.cardNumber
          }
        </Text>
      </View>
    </LinearGradient>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width*0.85,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardName: {
    fontFamily: fonts.heading,
    fontSize: 20,
    maxWidth: 200,
    maxHeight: 50,
    overflow: 'hidden',
    color: colors.white,
    textTransform: 'capitalize'
  },

  cardFooter: {
    marginTop: 'auto',
  },
  cardUsername: {
    fontFamily: fonts.subtitle,
    color: colors.white,
    fontSize: 16,
    textTransform: 'capitalize'
  },
  cardNumber: {
    fontFamily: fonts.cardNumber,
    color: colors.white,
    fontSize: 20,
  }
})