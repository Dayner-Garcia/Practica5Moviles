import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {WebView} from "react-native-webview";
import {useNavigation} from "@react-navigation/native";

const { width } = Dimensions.get('window');

// @ts-ignore
const MomentDetailScreen = ({ route }) => {
    const { moment } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.detailContainer}>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Volver</Text>
            </TouchableOpacity>

            <Image source={moment.image} style={styles.largeImage} />
            <Text style={styles.detailTitle}>{moment.title}</Text>
            <Text style={styles.details}>{moment.details}</Text>

            {moment.video && (
                <WebView
                    source={{ uri: moment.video }}
                    style={styles.video}
                    allowsFullscreenVideo
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    largeImage: {
        width: '100%',
        height: 300,
        borderRadius: 10
    },
    detailTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10
    },
    details: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    video: {
        width: width * 0.9,
        height: 250,
        borderRadius: 10,
        marginTop: 20,
    },
});

export default MomentDetailScreen;
