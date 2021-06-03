import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import fonts from '../styles/fonts'
import colors from '../styles/colors'

type Props = {
  cardNumber: string,
}

const CardFlag: React.FC<Props> = (props) => {
  return (
    <View>
      { props.cardNumber &&
        (props.cardNumber.slice(0,1) == '4' ? 
        <FontAwesome name="cc-visa" size={30} color="white" /> :
        props.cardNumber.slice(0,2) >= '5' && props.cardNumber.slice(0,2) <= '55' ?
        <FontAwesome name="cc-mastercard" size={30} color="white" /> :
        <Text style={styles.cardFlag}>Bandeira</Text>)
      }
    </View>
  )
}

export { CardFlag };

const styles = StyleSheet.create({
  cardFlag: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.white
  },
})