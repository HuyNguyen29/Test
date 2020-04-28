/**
 * Define Navigator for app
 */
import React, { useState, useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import StackNavigatorMain from "@config/router/StackNavigatorMain"
import { Transition } from 'react-native-reanimated';


const AppNavigator = createAnimatedSwitchNavigator(
  {
    StackNavigatorMain: StackNavigatorMain,
  },
  {
    headerMode: "none",
    initialRouteName: "StackNavigatorMain",
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={250}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={250} />
      </Transition.Together>
    ),
  }
);

export default createAppContainer(AppNavigator);