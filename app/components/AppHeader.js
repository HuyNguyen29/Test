import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    DeviceInfo,
    KeyboardAvoidingView,
    Image,
    ScrollView,
    FlatList,
    Alert
} from 'react-native';
import { Svg, SvgXml } from 'react-native-svg';
import AppBackground from "@components/AppBackground"
import I18n from '@assets/localization/I18n';
import { responsiveHeight, responsiveWidth } from '@utils/DimenUtils';
import Fonts from '@const/Fonts';
import Colors from '@const/Colors';
import Images from "@const/Images";
import Metrics from "@const/Metrics"
import { resetWarningCache } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-community/async-storage";
import AppLoading from '@components/AppLoading';
import Modal from "react-native-modal"

const isIphoneX = DeviceInfo.isIPhoneX_deprecated
const isIOS = Platform.OS === "ios"

function Demo(props) {

    const dispatch = useDispatch();

    return (
        <View style={styles.viewContainer}>
            <Image
                style={styles.image}
                source={Images.ant_tech}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        alignSelf: "center",
    },
    image: {

    }
});

export default Demo

