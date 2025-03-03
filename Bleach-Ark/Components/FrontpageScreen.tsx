import React from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import Carousel from 'react-native-reanimated-carousel';
import data from '../Data/FrontPageData'

const { width } = Dimensions.get('window');


const FrontPageScreen = () => {
    const render = ({ item }: { item: { id: string; type: string; source: any } }) => {

        if (!item || !item.source) {
            console.log(item, "Error con ese pana.")
            return <View style={styles.errorContainer}><Text>Invalid item</Text></View>;
        }

        if (item.type === 'image') {
            return <Image source={item.source} style={styles.image} />;
        } else if (item.type === 'video') {
            return (
                <WebView
                    source={{ uri: item.source }}
                    style={styles.video}
                    allowsFullscreenVideo
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            );
        }
        return null;
    };


    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={250}
                data={data}
                // @ts-ignore
                renderItem={render}
                loop={true}
                panGestureHandlerProps={{ activeOffsetX: [-10, 10] }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    video: {
        width: width * 0.9,
        height: 250,
        borderRadius: 10,
    },
    errorContainer: {
        width: width * 0.9,
        height: 250,
        borderRadius: 10,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FrontPageScreen;
