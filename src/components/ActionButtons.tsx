import React, { useState } from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

import { deleteCard, hideNumber } from '../store/cards/actions/card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ModalAlerts } from './ModalAlerts';
import Modal from 'react-native-modal';
import { RectButton } from 'react-native-gesture-handler';

type Props = {
  activeCardIndex: number,
  cards: [],
}

const ActionButtons: React.FC<Props> = ({ activeCardIndex, cards }: any) => {
  const dispatch = useDispatch();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  const handleDeleteCard = () => {
    dispatch(deleteCard(cards[activeCardIndex]))
    setDeleteModalOpen(false)
  }

  return (
    <>
      <Modal 
        style={styles.modal}
        isVisible={deleteModalOpen}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        hasBackdrop={true}
        backdropColor={'black'}
        backdropOpacity={0.7}
        deviceWidth={Dimensions.get('window').width}
        deviceHeight={Dimensions.get('window').height}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        onBackdropPress={() => setDeleteModalOpen(false)}
      >
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>Tem certeza que quer deletar o cartão {cards[activeCardIndex]?.name}?</Text>
          <TouchableOpacity 
            style={styles.modalActionButton}
            onPress={handleDeleteCard} 
          >
            <Text style={styles.modalActionButtonText}>Deletar este cartão</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.modalActionButton, { backgroundColor: colors.gray_100}]}
            onPress={() => setDeleteModalOpen(false)} 
          >
            <Text style={[styles.modalActionButtonText, { color: colors.gray_800 }]}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    <RectButton
      activeOpacity={0.7} 
      style={styles.button}
      onPress={() => dispatch(hideNumber(cards[activeCardIndex]))}
    >
      <Ionicons 
        name={ cards[activeCardIndex]?.hideNumber ? "eye-outline" : "eye-off-outline"} 
        size={25} 
        style={{ width: 25 }}
        color="#2D2940" 
      /> 
      <Text style={styles.title}>{cards[activeCardIndex]?.hideNumber ? 'Mostrar número' : 'Esconder número'}</Text>
    </RectButton>

    <RectButton 
      activeOpacity={0.7} 
      style={[styles.button]}
      onPress={() => setDeleteModalOpen(true)}
    >
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
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0
  },
  modalCard: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  modalTitle: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalActionButton: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: colors.red,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalActionButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },


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
  disabled: {
    opacity: 0.4,
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