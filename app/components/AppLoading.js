import React, { Component } from "react"
import {
    StyleSheet,
    ScrollView,
    View,
    ActivityIndicator
} from 'react-native';
import AppBackground from "@components/AppBackground"
import Colors from "@const/Colors";

export default function AppLoading(props) {
    return (
        <View style={styles.viewContainer}>
            <ActivityIndicator size="large" color={Colors.main} />
        </View>

    )
}

const styles = StyleSheet.create({
    viewContainer: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})