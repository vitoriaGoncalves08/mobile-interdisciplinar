import React from 'react';
import { StyleSheet } from 'react-native';
const color = ['#9400D3', '#1d1120'];
const Header = StyleSheet.create({
    View:{
        backgroundColor: '#555',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    h1:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '100',
        fontFamily: 'monospace', //Fonte aqui fofa 
    },
    input:{
        paddingVertical: 5,
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 2,
        borderBottomEndRadius: 2,
        borderTopLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#222',
        backgroundColor: '#ddd',
        paddingHorizontal: 10,
    }
});


const Item = StyleSheet.create({
    View:{
        backgroundColor: color[1],
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: .2,
        borderColor: color[0],
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'monospace',
    },
    strong:{
        color: color[0],
        fontWeight: 'bold',
        letterSpacing: 1.5,
    }
});


export {Header, Item}