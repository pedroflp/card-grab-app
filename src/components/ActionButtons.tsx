import React, { useState } from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

import { setActiveCard} from '../store/actions/setActiveCard'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = {
  activeCard: number,
}

const ActionButtons: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [hideCardNumber, setHideCardNumber] = useState(Boolean)

  if (hideCardNumber == true) {
    setHideCardNumber(false)
  }

  const cards = useSelector((state: RootStateOrAny) => state.createCard.data);

  // function handleHideCardNumber() {
  //   dispatch(toggleHideCardNumber(props.activeCard))
  // }


  return (
   <>
    <RectButton activeOpacity={0.7} style={styles.button}>
      <Ionicons 
        name="eye-outline" 
        size={25} 
        style={{ width: 25 }}
        color="#2D2940" 
      />
      <Text style={styles.title}>Esconder número</Text>
    </RectButton>

    <RectButton activeOpacity={0.7} style={styles.button}>
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