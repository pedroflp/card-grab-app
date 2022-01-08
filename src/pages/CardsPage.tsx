import React, { useEffect, useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { ActionButtons } from '../components/ActionButtons';
import NoCard from '../components/NoCard';
import Card from '../components/Card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

type CardProps = {
  id: number,
  name: string,
  username: string,
  number: string,
  hideNumber: boolean,
  style: {
    cardColor: {
      left: string,
      right: string
    }
  }
}

type SliderCard = {
  item: CardProps,
  index: number,
}

const CardsPage: React.FC = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const cards = useSelector((state: RootStateOrAny) => state.cards.cards)

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const SliderCardItem = ({ item, index }: SliderCard) => (
    <Card
      id={index}
      name={item.name}
      username={item.username}
      number={item.number} 
      hideNumber={item.hideNumber}
      key={index}
      color={item.style.cardColor}
    />
  )

  return (
    <SafeAreaView>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.pageContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Seus Cartões</Text>
            <RectButton onPress={() => navigation.navigate('CreateCardPage')} activeOpacity={0.8} style={styles.createCardButton}>
              <Entypo name='plus' size={25} />
            </RectButton>
          </View>

        { cards.length > 0
          ?
          <>
            <View style={styles.cardContainer}>
              <Carousel
                layout="stack"
                data={cards}
                renderItem={SliderCardItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width*0.85}
                onSnapToItem={(index) => setCurrentCardIndex(index)}
                useScrollView={false}
              />
              <Pagination
                dotsLength={cards.length}
                activeDotIndex={currentCardIndex}
                dotStyle={{
                  width: 15,
                  height: 5,
                  borderRadius: 5,
                  marginHorizontal: -5,
                  backgroundColor: 'rgba(82, 82, 82, 0.6)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.85}
              />
            </View>

            <View style={styles.actionContainer}>
              <Text style={styles.actionTitle}>Ações</Text>
              <View style={styles.actionButtonList}>
                <ActionButtons cards={cards} activeCardIndex={currentCardIndex} />
              </View>
            </View>
          </>
          : 
            <NoCard 
              topChildren={<Text>💳</Text>} 
              centerChildren={<Text>Você ainda não criou nenhum cartão!</Text>} 
            />
        }

        </View>
     </ScrollView>
    </SafeAreaView>  
  );
}

export default CardsPage;


const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 30,
  }, 

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  headerTitle: {
    fontFamily: fonts.heading,
    fontSize: 36,
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
  },

  actionContainer: {
    marginTop: 10,
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