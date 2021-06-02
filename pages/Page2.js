import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import Header from './componentes/Header'
import { cityConsult } from '../Services/apiWeather'


const Page2 = ({ navigation }) => {

    const [city, setCity] = React.useState('');

    const buscar = async () => {
        const city = await cityConsult(city);
        navigation.navigate('Page3', city)
    };

    return (
        <>
            <Header title='Cidade e tempo' />
            <View style={styles.container}>
                <Text style={styles.title}>Informe a cidade</Text>               
                <TextInput style={styles.TextInput} onChangeText={(texto) => setCity(texto)} />
                <Button style={styles.Button}
                    title="Previsão do tempo"
                    onPress={() => { buscar() }}
                />
                 <View style={styles.Button} >
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
        padding: 10,
        borderRadius: 5
    },
    TextInput: {
        backgroundColor: '#DCDCDC',
        padding: 1.5,
        borderRadius: 5,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 4,
    }
});

export default Page2;
