import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Card: React.FC = () => { 
  return (
    <LinearGradient 
      colors={['#FC6767b3', '#EC008Cb5']} 
      start={[0,1]}
      end={[1,0]}
      style={styles.card}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardName}>Nome do Cartão</Text>
        <Text style={styles.cardFlag}>Bandeira</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.cardUsername}>Nome Completo</Text>
        <Text style={styles.cardNumber}>1234 1234 1234 1234</Text>
      </View>
    </LinearGradient>
  );
}

export { Card };

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 200,
    backgroundColor: colors.white,
    marginHorizontal: 10,
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
    color: colors.white
  },
  cardFlag: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.white
  },

  cardFooter: {
    marginTop: 'auto',
  },
  cardUsername: {
    fontFamily: fonts.subtitle,
    color: colors.white,
    fontSize: 16
  },
  cardNumber: {
    fontFamily: fonts.cardNumber,
    color: colors.white,
    fontSize: 20,
  }
})