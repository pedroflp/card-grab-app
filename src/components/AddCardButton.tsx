import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// import { Container } from './styles';

const AddCardButton: React.FC = () => {
  return (
    <View style={styles.addCardContainer}>
      <RectButton style={styles.addCardButton}>
        <Text style={styles.addCardButtonTitle}>Adicionar</Text>
      </RectButton>
    </View>
  );
}

export default AddCardButton;

const styles = StyleSheet.create({
  addCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardButton: {
    paddingVertical: 24,
    paddingHorizontal: 122,
    width: Dimensions.get('window').width*0.85,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  addCardButtonTitle: {
    fontSize: 15,
    fontFamily: fonts.heading,
    textTransform: 'uppercase',
    color: colors.white,
  }
})