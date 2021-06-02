import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Header from './componentes/Header';

const Page3 = ({ navigation, route }) => {
    return (
        <>
            <Header title='Cidade e tempo' />
            <View style={styles.container}>
                <Text style={styles.title}>Clima</Text>
                <Text style={styles.Text}>Temperatura: {route.params.temperature}</Text>
                <Text style={styles.Text}>Vento: {route.params.wind}</Text>
                <Text style={styles.Text}>Descrição: {route.params.description}</Text>
                <View >
                    <Image style={styles.Images}
                     source={{ uri: 'https://paisefilhos.uol.com.br/wp-content/uploads/2020/05/sol-teletubbies.jpg' }} 
                     />
                </View>
                <View style={styles.Button}>
                    <Button
                        title='Voltar'
                        onPress={() => { navigation.goBack() }}
                    />
                </View>                

            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A5ACD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#EEE5DE',
    },
    Button: {
        padding: 10
    },
    Text: {
        backgroundColor: '#DCDCDC',
        padding: 1.5,
        borderRadius: 5,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 4,
    },
    Images:{
        width:200,
        height: 200
    }

});

export default Page3;
