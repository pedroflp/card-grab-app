import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = {
  topChildren: React.ReactChild,
  centerChildren: React.ReactChild,
}

const NoCard: React.FC<Props> = ({ topChildren, centerChildren }) => {
  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0)']}
      start={[0,1]}
      end={[1,0]}
      style={styles.noCard}
    >
      <View style={styles.noCardHeader}>
        <Text style={styles.noCardEmoji}>{topChildren}</Text>
        <Text style={styles.noCardText}>{centerChildren}</Text>
      </View>
    </LinearGradient>
  );
}

export default NoCard;

const styles = StyleSheet.create({
  noCard: {
    marginHorizontal: 30,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width*0.85,
    height: 200,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.gray_100,
    borderRadius: 15,
    padding: 30,
  },
  noCardHeader: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  noCardEmoji: {
    fontSize: 40,
    opacity: 0.5
  },
  noCardText: {
    fontFamily: fonts.heading,
    color: colors.gray_100,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  }
})

