import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FCMService from './src/FCMService';

const App = () => {
  const onRegister = token => {
    console.log('[NotificationFCM] onRegister', token);
  };
  const onNotification = notify => {
    console.log('[NotificationFCM] onNotification', notify);
  };
  const onOpenNotification = notify => {
    console.log('[NotificationFCM] onOpenNotification', notify);
  };

  useEffect(() => {
    var fcmNotification = new FCMService()
    fcmNotification.register(onRegister,onNotification.onOpenNotification)
  },[]);
  return (
    <View style={styles.container}>
      <Text>Test Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
