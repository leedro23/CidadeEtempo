import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './componentes/Header'
import Page2 from './Page2';

const Home = ({ navigation }) => {
    return (
        <>
            <Header title='Cidade e tempo' />
            <View style={styles.container}>                
                <View style={styles.Button}>
                <Button
                    title="Clique aqui"
                    onPress={() => { navigation.navigate('Page2') }}
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
        borderRadius: 150 / 2,
    }
});

export default Home
