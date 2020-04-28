import React, { Component } from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Images from "@const/Images"

const data = Array.from({ length: 30 });

export default class Screen2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {data.map((_, i) =>
                    <View key={i} style={styles.row}>
                        <Text>{i}</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    row: {
        height: 20,
        margin: 30,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});