import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RootStateOrAny, useSelector } from 'react-redux'

import { Entypo } from '@expo/vector-icons';

import Card from '../components/Card';
import { ActionButtons } from '../components/ActionButtons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RectButton } from 'react-native-gesture-handler';


type CardProps = {
  cardId: number,
  cardName: string,
  cardUsername: string,
  cardNumber: string,
}


const CardsPage: React.FC = () => {
  const navigation = useNavigation();

  const cards = useSelector((state: RootStateOrAny) => state.cards)
 
  function createNewCard() {
    navigation.navigate('CreateCardPage')
  }

  return (

      <SafeAreaView>
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Cartões</Text>
          <RectButton onPress={createNewCard} activeOpacity={0.8} style={styles.createCardButton}>
            <Entypo  name='plus' size={25} />
          </RectButton>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardContainer}>
          { cards.map((card: CardProps) => {
            return (
              <Card 
                cardName={card.cardName}
                cardUsername={card.cardUsername}
                cardNumber={card.cardNumber}
              />
            )
          })}
          </View>
        </ScrollView>

        { cards.length > 0 &&
        <View style={styles.actionContainer}>
          <Text style={styles.actionTitle}>Ações</Text>
          <View style={styles.actionButtonList}>
            <ActionButtons />
          </View>
        </View>
        }

      </View>
    </SafeAreaView>  
  );
}

export { CardsPage };

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 50,
  }, 

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  headerTitle: {
    fontFamily: fonts.heading,
    fontSize: 40,
  },
  createCardButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: colors.black,
    shadowOffset: { height: 20, width: 20 },
  },
  cardContainer: {
    marginVertical: 33,
    marginHorizontal: 20,
    flexDirection: 'row'
  },

  actionContainer: {
    marginTop: 44,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  actionTitle: {
    fontFamily: fonts.heading,
    color: colors.textSubTitle,
    fontSize: 16
  },
  actionButtonList: {
    marginTop: 15
  }
})