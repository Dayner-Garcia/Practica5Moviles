import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import characters from '../Data/Characters';

// @ts-ignore
const CharactersScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('CharacterDetail', {character: item})}
                    >
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    item: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CharactersScreen;