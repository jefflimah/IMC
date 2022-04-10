import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View }



    from 'react-native';
import Saudadacao from './src/components/saudacao/saudacao';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { altura: 0, peso: 0, resultado: 0, resultadoText: "" }
        this.calcular = this.calcular.bind(this)

    }
    calcular() {
        let imc = this.state.peso / (this.state.altura * this.state.altura)
        let s = this.state
        s.resultado = imc


        if (s.resultado < 16) {
            s.resultadoText = 'Muito abaixo do peso 👎'

        }
        else if (s.resultado < 18.5) {
            s.resultadoText = 'Abaixo do peso 🤔'
        }
        else if (s.resultado < 25) {
            s.resultadoText = 'Saudavel 😎'
        }
        else if (s.resultado < 30) {
            s.resultadoText = 'Sobrepeso 👎'
        }
        else {
            s.resultadoText = 'Obeso 😮 '

        }

        this.setState(s)



    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.entrada}>
                    <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => { this.setState({ altura }) }} />
                    <TextInput autoCapitalize="none" placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso) => { this.setState({ peso }) }} />

                </View>
                <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular IMC</Text></TouchableOpacity>
                <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
                <Text style={[styles.resultado, { fontSize: 20 }]}>{this.state.resultadoText}</Text>


                <Saudadacao name="Humberto" />
                <Saudadacao name="Jeffin" />
                <Saudadacao name="Teste" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0FFF0',
    },
    entrada: {
        width: "200%",


    },
    input: {
        height: 80,
        textAlign: "center",
        width: "50%",
        fontSize: 50,
        marginTop: 50,
    },
    button: {
        backgroundColor: "#00008B",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',

    },
    buttontext: {
        textAlign: "center",
        padding: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: "#FFFFF0",

    },
    resultado: {
        alignSelf: "center",
        color: "lightgray",
        fontSize: 45,
        fontWeight: 'bold',
        padding: 6,
    },
});