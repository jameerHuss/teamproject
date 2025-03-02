import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for icons
import Modal from 'react-native-modal'; // Importing react-native-modal

const EmergencyButton = ({ onPress }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePress = () => {
    toggleModal();
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        {/* Icon and text inside the button */}
        {/* <Icon name="ambulance" size={40} color="white" /> */}
        <Text style={styles.buttonText}>Emergency</Text>
      </TouchableOpacity>

      {/* Custom Modal with icon and message */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          {/* <Icon name="ambulance" size={50} color="red" /> */}
          <Text style={styles.modalText}>EMERGENCY BUTTON PRESSED.</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 40, // Increased padding for larger circle
    borderRadius: 80, // Increased borderRadius for larger circle
    width: 160, // Increased width
    height: 160, // Increased height to maintain circular shape
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Needed for positioning the text below the icon
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, // Added margin to separate the text from the icon
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default EmergencyButton;
