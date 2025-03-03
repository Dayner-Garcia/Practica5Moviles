import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import moments from '../Data/Moments'

const MomentsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={moments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.item}
                        // @ts-ignore
                        onPress={() => navigation.navigate('MomentDetail', {moment: item})}>

                        <Image source={item.image} style={styles.image}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default MomentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    item: {
        marginBottom: 20,
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    }
});
