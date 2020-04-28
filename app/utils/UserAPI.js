import {
    Platform
} from 'react-native'
import NetInfo from "@react-native-community/netinfo";

import APP_VERSION from '@const/App'
import { API_ENDPOINT } from '@const/Api'
import { useSelector, useDispatch } from 'react-redux';
import { actionLoading } from "@actions/loadingAction/LoadingAction"
import AsyncStorage from "@react-native-community/async-storage"

const UserAPI = {
    postFetchWithoutToken: async (url, params) => {
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return fetch(API_ENDPOINT + url, {
                    method: 'POST',
                    'cache-control': 'no-cache',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'User-Agent': Platform.OS,
                    },
                    body: JSON.stringify(params),
                })
                    .then((response) => {
                        return response.json()
                    })
                    .catch((error) => {
                        return error
                    });
            }
            else {
                alert("Check your connection")
            }
        })
    },

    postFetch: async (url, params) => {
        const token = await AsyncStorage.getItem("token")
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return fetch(API_ENDPOINT + url, {
                    method: 'POST',
                    'cache-control': 'no-cache',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'User-Agent': Platform.OS,
                        'token': token
                    },
                    body: JSON.stringify(params),
                })
                    .then((response) => {
                        return response.json()
                    })
                    .catch((error) => {
                        return error
                    });
            }
            else {
                alert("Check your connection")
            }
        })
    },

    getFetch: async (url, isFetchPDF) => {
        const token = await AsyncStorage.getItem("token")
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return fetch(API_ENDPOINT + url, {
                    method: 'GET',
                    'cache-control': 'no-cache',
                    headers: {
                        'User-Agent': Platform.OS,
                        'token': token
                    }
                })
                    .then((response) => {
                        return !isFetchPDF ? response.json() : response
                    })
                    .catch((error) => {
                        return error
                    });
            }
            else {
                alert("Check your connection")
            }
        })
    },

    deleteFetch: async (url, params) => {
        const token = await AsyncStorage.getItem("token")
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return fetch(API_ENDPOINT + url, {
                    method: 'DELETE',
                    'cache-control': 'no-cache',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'User-Agent': Platform.OS,
                        'token': token
                    },
                    body: JSON.stringify(params),
                })
                    .then((response) => {
                        return response.json()
                    })
                    .catch((error) => {
                        return error
                    });
            }
            else {
                alert("Check your connection")
            }
        })
    },

    patchFetch: async (url, params) => {
        const token = await AsyncStorage.getItem("token")
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return fetch(API_ENDPOINT + url, {
                    method: 'PATCH',
                    'cache-control': 'no-cache',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'User-Agent': Platform.OS,
                        'token': token
                    },
                    body: JSON.stringify(params),
                })
                    .then((response) => {
                        return response.json()
                    })
                    .catch((error) => {
                        return error
                    });
            }
            else {
                alert("Check your connection")
            }
        })
    }
}

export default UserAPI;
