import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider, Input, Text, Button } from "react-native-elements";
import { InserePalavra } from './Controller'
import { Header } from "./Style";
export default function Insert() {

    const [name, setName] = useState(null);
    const [translate, settranslate] = useState(null);
    const [description, setdescription] = useState(null);
  
  return (
    <ThemeProvider>
      <View style={[Header.View, {flex: 1}]}>
            <Text h1 h1Style={[Header.h1,{marginTop: -10,marginBottom: 10,fontSize: 28}]}>Insert a new term</Text>
            <Input
            placeholder='Type a word'
            label="Word"
            labelStyle={{color: "white"}}
            onChangeText={text=>setName(text)}
            inputContainerStyle={Header.input}
            />
            <Input
            placeholder=' Type the translate'
            label='Translate'
            labelStyle={{color: "white"}}
            onChangeText={text=>settranslate(text)}
            inputContainerStyle={Header.input}
            />
            <Input
            placeholder='Type the description'
            label='Description'
            labelStyle={{color: "white"}}
            onChangeText={text=>setdescription(text)}
            inputContainerStyle={[Header.input, {paddingVertical: 50,}]}
            />
            <Button title='Register!'
            type='solid'
            buttonStyle={{backgroundColor: '#9400D399',width: '70%', alignSelf: 'center', paddingVertical: 15,borderColor:'white',borderWidth: .3,borderRadius: 4}}
            titleStyle={{color:'white', marginLeft: 6,fontSize: 20}} // pode tirar essa fita
            onPress={()=>{
                // props.navigation.navigate('Register');
                if(translate && name && description){
                    let data = InserePalavra({
                        palavra: name,
                        traducao: translate,
                        descricao: description
                    })
                    data.then(val=>{
                        alert(val);
                        setdescription('');
                        setName('');
                        settranslate('');
                    })
                    .catch((val)=>{
                        alert('Erro' + val)
                    })
                }else {
                    alert('Preencha todos os dados corretamente...'); //Pode fazer verificacao dps aqui
                }
            }}
            />
             <StatusBar barStyle='default' />
      </View>
    </ThemeProvider>
  )
};