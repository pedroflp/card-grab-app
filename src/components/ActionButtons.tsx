import React from 'react';
import { Text, StyleSheet, Dimensions, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useAppContext } from '../contexts/Context';


const ActionButtons: React.FC = () => {
  const { toggleView, deleteCard } = useAppContext();

  return (
   <>
      <RectButton onPress={toggleView} activeOpacity={0.7} style={styles.button}>
        <Ionicons 
          name="eye-outline" 
          size={25} 
          style={{ width: 25 }}
          color="#2D2940" 
        />
      <Text style={styles.title}>Esconder número</Text>
    </RectButton>

    <RectButton onPress={deleteCard} activeOpacity={0.7} style={styles.button}>
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