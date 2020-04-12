import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import FCMService from './src/FCMService';
var fcmNotification = new FCMService();

console.disableYellowBox = true;
const App = () => {
  const onRegister = token => {
    console.log('[NotificationFCM] onRegister', token);
  };
  const onNotification = notify => {
    console.log('[NotificationFCM] onNotification', notify);
    //Handle push notification

    const channelObj = {
      channelId: 'SampleChannelID',
      channelName: 'SampleChannelName',
      channelDes: 'SampleChannelDes',
    };
    const channel = fcmNotification.buildChannel(channelObj);

    const buildNotify = {
      dataId: notify.notificationId,
      title: notify._title,
      content: notify._body,
      sound: 'default',
      channel: channel,
      data: {},
      colorBgIcon: '#1A243B',
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
      vibrate: true,
    };
    const notification = fcmNotification.buidlNotification(buildNotify);
    fcmNotification.displayNotification(notification);
  };

  const onOpenNotification = notify => {
    console.log('[NotificationFCM] onOpenNotification', notify);
    alert('Open Notification: ' + notify._body);
  };

  useEffect(() => {
    fcmNotification.register(onRegister, onNotification, onOpenNotification);
  }, []);
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
