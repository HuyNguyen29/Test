import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import Colors from '@const/Colors';
import { StyleSheet, View, StatusBar } from 'react-native';

export default function AppBackground(props) {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={[
          styles.safeArea,
        ]}>
        <View
          style={[
            styles.background,
          ]}>
          {props.children}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  background: {
    // backgroundColor: Colors.background,
    flex: 1,
    width: '100%',
  },
});
