import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

type CardProps = {
  emoji: string,
  message: string,
}

const ModalAlerts: React.FC<CardProps> = (props) => {
  return (
    <View>
        <Modal
          style={styles.modal}
          isVisible={true}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          hasBackdrop={true}
          backdropColor={'black'}
          backdropOpacity={0.7}
          deviceWidth={Dimensions.get('window').width}
          deviceHeight={Dimensions.get('window').height}
          backdropTransitionInTiming={400}
          backdropTransitionOutTiming={400}
        >
          <View style={styles.modalCard}>
            <Text style={styles.modalCardEmoji}>{props.emoji}</Text>
            <Text style={styles.modalCardText}>{props.message}</Text>
          </View>
        </Modal>
    </View>
  );
}

export { ModalAlerts };

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
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  modalCardEmoji: {
    fontSize: 50,
  },
  modalCardText: {
    fontFamily: fonts.heading,
    marginTop: 20,
    flexWrap: 'wrap',
    fontSize: 18,
    textAlign: 'center'
  }
})