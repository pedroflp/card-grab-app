import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { CardFlag } from './CardFlag';

type CardProps = {
  id: number,
  name: string,
  username: string,
  number: string,
  hideNumber: boolean,
}


const Card: React.FC<CardProps> = (props) => {
  const [cardColors, setCardColors] = useState({
    left: '',
    right: '',
  })

  const randomColor = () => {
    const hex = (Math.random()*0xFFFFFF<<0).toString(16);
    return `#${hex}`
  }

  useEffect(() => {
    setCardColors({
      left: randomColor(),
      right: randomColor()
    })
  }, [])

  return (
      <LinearGradient 
        colors={[ cardColors.left, cardColors.right ]} 
        start={[ 0,1 ]}
        end={[ 1,0 ]}
        style={styles.card}
      >
      <View style={styles.cardHeader}>
        <Text style={styles.cardName}>{props.name}</Text>
        <CardFlag cardNumber={props.number} />
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.cardUsername}>{props.username}</Text>
        <Text style={styles.cardNumber}>
          { 
            props.hideNumber 
            ? '**** **** **** ****' 
            : props.number 
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