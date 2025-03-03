import {Text, View, StyleSheet, Button, Dimensions} from "react-native";
import {WebView} from "react-native-webview";

const { width } = Dimensions.get('window');

const LifeScreen = () => {

    const youtubevideo = 'https://youtube.com/shorts/EmsxIKxsOBI?feature=share'
    return (
        <View style={styles.container}>
            <Text>! Razones de por que este anime es importante para mi !</Text>


            <WebView
                source={{uri: youtubevideo}}
                style={styles.video}
                allowsFullscreenVideo
                javaScriptEnabled={true}
                domStorageEnabled={true}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    video: {
        width: width * 0.9,
        height: 250,
        borderRadius: 10,
        marginTop: 20,
    },
});

// @ts-ignore
export default LifeScreen;