import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

const AboutScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Acerca de Bleach</Text>

            <Image
                source={{uri: 'https://external-preview.redd.it/w5BIbOJe9gijgwJs4XNugycvOSoS66wLRPVUOY9phyU.jpg?width=1080&crop=smart&auto=webp&s=440914e7a65ae09729e3a2e3d654539dc63539ad'}}
                style={styles.image}
            />

            <Text style={styles.description}>
                Bleach es una serie de manga escrita e ilustrada por Tite Kubo. La serie sigue a Ichigo Kurosaki, un
                adolescente
                que obtiene los poderes de un shinigami (dios de la muerte) y se ve envuelto en la defensa de la Tierra
                contra los
                espíritus malignos conocidos como Hollows.
            </Text>

            <Text style={styles.detailTitle}>Creador:</Text>
            <Text style={styles.details}>Tite Kubo</Text>

            <Text style={styles.detailTitle}>Número de temporadas:</Text>
            <Text style={styles.details}>16 temporadas</Text>

            <Text style={styles.detailTitle}>Género:</Text>
            <Text style={styles.details}>Shonen, Acción, Sobrenatural</Text>

            <Text style={styles.detailTitle}>Fecha de estreno:</Text>
            <Text style={styles.details}>2004</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
        lineHeight: 24,
    },
    detailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: "center"
    },
    details: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default AboutScreen;