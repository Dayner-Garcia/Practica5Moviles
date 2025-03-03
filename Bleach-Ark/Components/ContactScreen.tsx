import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

const ContactScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Contrátame</Text>

                <Image
                    source={require('../assets/Images/Me.jpg')}
                    style={styles.profileImage}
                />

                <Text style={styles.subTitle}>Dayner Garcia</Text>

                <Text style={styles.subTitle}>Datos de contacto:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descripción breve sobre ti"
                    multiline
                />

                <Button title="Enviar" onPress={() => alert('Formulario enviado!')} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ContactScreen;
