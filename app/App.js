import React, { Component } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import AppBackground from "@components/AppBackground"
import Images from "@const/Images"
import Screen1 from '@screens/Screen1';
import Screen2 from '@screens/Screen2';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      screen: 1,
      refreshing: false
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      this.state.screen === 1 ? <Screen1 /> : <Screen2 />
    );
  }

  onScreen1Press = () => {
    this.setState({
      screen: 1
    })
  }

  onScreen2Press = () => {
    this.setState({
      screen: 2
    })
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    })
    setTimeout(() => {
      this.setState({
        refreshing: false
      })
    }, 2000);
  }

  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.6],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    return (
      <AppBackground style={styles.fill}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
            ]}
            source={Images.header}
          />
          <Animated.View>
            <View style={styles.bar}>
              <Text style={styles.title}>Search bar</Text>
            </View>
          </Animated.View>
        </Animated.View>
        <View style={styles.viewHeader}>
          <TouchableOpacity onPress={this.onScreen1Press}>
            <Text style={styles.textScreen}>screen 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onScreen2Press}>
            <Text style={styles.textScreen}>screen 2</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: false },
          )}
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
        >
          {this._renderScrollViewContent()}
        </ScrollView>

      </AppBackground>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10
  },
  textScreen: {
    backgroundColor: "red",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    backgroundColor: 'transparent',
    color: 'blue',
    fontSize: 18,
  },
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
});