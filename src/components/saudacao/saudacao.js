import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const Saudacao = (props) => {

    return (
        <View style={styles.center}>
            <Text>
                Olá {props.name}!
            </Text>
        </View>

    );

}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }

})


export default Saudacao;