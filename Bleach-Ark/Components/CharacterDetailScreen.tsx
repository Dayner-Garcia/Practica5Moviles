import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import characters from '../Data/Characters';

// @ts-ignore
const CharacterDetailScreen = ({route}) => {
    const {character} = route.params || {};
    const navigation = useNavigation();

    if (!character) {
        return <Text>No hay información del personaje.</Text>;
    }

    const otherCharacters = characters.filter(c => c.id !== character.id);

    return (
        <View style={styles.detailContainer}>
            <Image source={character.image} style={styles.image}/>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.details}>{character.details}</Text>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Volver</Text>
            </TouchableOpacity>

            <FlatList
                data={otherCharacters}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.otherItem}
                        // @ts-ignore
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
    detailContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        textAlign: 'center',
    },
    backButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    backButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    otherItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CharacterDetailScreen;
