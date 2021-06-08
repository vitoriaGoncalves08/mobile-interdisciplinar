import React from 'react';
import { StyleSheet } from 'react-native';
const color = ['#9400D3', '#40374e'];
const Header = StyleSheet.create({
    View:{
        backgroundColor: '#24262b',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    h1:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '100',
        fontFamily: 'monospace', //Fonte aqui fofa   
        fontWeight:'bold' 
    },
    input:{
        paddingVertical: 5,
        borderTopEndRadius: 10,
        fontFamily: 'monospace', //Fonte aqui fofa   
        borderBottomLeftRadius: 2,
        borderBottomEndRadius: 2,
        borderTopLeftRadius: 10,
        borderWidth: 1,
        marginBottom: -10,
        borderColor: '#222',
        backgroundColor: '#ddd',
        paddingHorizontal: 10,
        borderBottomWidth: 5,
        borderColor:color[0],
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
        margin:20,
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
        fontWeight:'bold' 
     },
     icons:{
        flex:1,
        flexDirection:'row-reverse',
     }
});


export {Header, Item}