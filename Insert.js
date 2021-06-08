import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider, Input, Text, Button } from "react-native-elements";
import { InserePalavra, AtualizarPalavra } from './Controller'
import { Header } from "./Style";
export default function Insert(props) {
    const [title, setTitle] = useState('Register');
    const [name, setName] = useState(null);
    const [id, setId] = useState(null);
    const [translate, settranslate] = useState(null);
    const [description, setdescription] = useState(null);
  
    useEffect(() => {
        if(props.route.params){
            if(props.route.params.textTitle){
                setTitle(props.route.params.textTitle)
            }
            if(props.route.params.data)
            {
                let palavra = props.route.params.data;
                setId(palavra[0]);
                setName(palavra[1]);
                settranslate(palavra[2]);
                setdescription(palavra[3]);
            }
        }
    }, [])
  return (
    <ThemeProvider>
      <View style={[Header.View, {flex: 1}]}>
            <Text h1 h1Style={[Header.h1,{marginTop: -10,marginBottom: 10,fontSize: 28}]}>{title} a term</Text>
            <Input
            placeholder='Type a word'
            label="Word"
            value={name}
            labelStyle={{color: "white"}}
            onChangeText={text=>setName(text)}
            inputContainerStyle={Header.input}
            />
            <Input
            placeholder=' Type the translate'
            value={translate}
            label='Translate'
            labelStyle={{color: "white"}}
            onChangeText={text=>settranslate(text)}
            inputContainerStyle={Header.input}
            />
            <Input
            placeholder='Type the description'
            value={description}
            label='Description'
            labelStyle={{color: "white"}}
            onChangeText={text=>setdescription(text)}
            numberOfLines={6}
            multiline
            inputContainerStyle={[Header.input, {}]}
            />
            <Button title={`${title}!`}
            type='solid'
            buttonStyle={{backgroundColor: '#9400D399',width: '70%', alignSelf: 'center', paddingVertical: 15,borderColor:'white',borderWidth: .3,borderRadius: 4}}
            titleStyle={{color:'white', marginLeft: 6,fontSize: 20}} // pode tirar essa fita
            onPress={()=>{
                
                if(translate && name && description){
                    if(id != null){
                        // atualizar
                        let data = AtualizarPalavra({
                            id: id,
                            nome: name,
                            traducaoPalavra: translate,
                            descricao: description
                        })
                        data.then(val=>{
                            setdescription('');
                            setName('');
                            setId(null);
                            settranslate('');
                        })
                        .catch((val)=>{
                            console.log("Error:" +val);
                        })
                    }else{
                        // inserir
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
                    }
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