import React, { useState } from 'react';
import { Dimensions, View } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import Card from './Card'

type CardProps = {
  cardId: number,
  cardName: string,
  cardUsername: string,
  cardNumber: string,
}

type SliderCard = {
  item: CardProps,
  index: number,
}

const SliderCard = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0)

  const cards = useSelector((state: RootStateOrAny) => state.createCard.data)
  
  
  const SliderCardItem = ({ item, index }: SliderCard) => (
    <Card
      cardId={index}
      cardName={item.cardName}
      cardUsername={item.cardUsername}
      cardNumber={item.cardNumber} 
      key={index}
    />
  ) 
  
  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        data={cards}
        renderItem={SliderCardItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width*0.85}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={false}
      />
      <Pagination
        dotsLength={cards.length}
        activeDotIndex={index}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        tappableDots={false}
      />
    </View>

  )
}





export { SliderCard }