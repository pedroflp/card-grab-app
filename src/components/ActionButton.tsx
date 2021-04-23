import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

type ButtonProps = {
  children: React.ReactChild,
  title: string,
  type: string,
}

const ActionButton: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      {props.children}
      <Text style={
        props.type === 'delete' ? styles.titleRed : styles.title
      }>
      {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export { ActionButton };

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