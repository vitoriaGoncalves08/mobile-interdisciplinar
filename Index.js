import React, { useEffect, useState } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { PegaPalavra, DeletarPalavra} from './Controller';
import { Header, Item } from './Style';
import { ThemeProvider, Input, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
const color = ['#9400D3', '#2d2130'];

export default function Index(props) {
  const [pesquisa, setPesquisa] = useState(null);
  const [Render, setRender] = useState([]);
  useEffect(() => {
    if (pesquisa != null && pesquisa.length != 0) {
      PegaPalavra(pesquisa)
        .then(val => {
          setRender(JSON.parse(val));
        })
    } else setRender([]);
  }, [pesquisa])
  return (
    <ThemeProvider>
      <FlatList
        style={Header.View}
        ListHeaderComponent={
          <View>
            <Text h1 h1Style={Header.h1}>STerms</Text>
            <Input
              value={pesquisa}
              placeholder='Search for a term...'
              onChangeText={val => setPesquisa(val)}
              label='Term'
              labelStyle={{ color: "white" }}
              inputContainerStyle={Header.input}
            />
            <Button title='Register new word'
              type='solid'
              buttonStyle={{ backgroundColor: color[0], width: '70%', alignSelf: 'center', paddingVertical: 10, borderColor: 'white', borderWidth: .3, borderRadius: 4 }}
              icon={<Icon name='plus' size={20} color='white' />}
              titleStyle={{ color: 'white', marginLeft: 6 }} // pode tirar essa fita
              onPress={() => {
                props.navigation.navigate('Term');
              }}
            />

            <StatusBar translucent={false} />
          </View>
        }
        data={Render}
        keyExtractor={(val, index) => val.idPalavra}
        renderItem={val => (
          <View style={Item.View}>
            <View style={Item.icons}>
            <Button
              type='clear'
              buttonStyle={
                { borderRadius:50 ,backgroundColor: color[0], marginRight:10}}
                icon={<Icon name='erase' size={20} color='white' />}
              onPress={async() => {
                if(val.item.idPalavra != null){
                  let id = val.item.idPalavra;
                  let res = await DeletarPalavra(id);
                  console.log(res);
                  setPesquisa('');
                }
              }}/>

            <Button
              type='clear'
              buttonStyle={
                { borderRadius:50 ,backgroundColor: color[0], marginRight:10}}
                icon={<Icon name='new-message' size={20} color='white' />}
              onPress={() => {
                props.navigation.navigate('Term',{data: val.item, textTitle: 'Update'});
              }}/>

              </View>

            <Text style={Item.text}><Text style={Item.strong}>ID: </Text>{val.item.idPalavra}</Text>
            <Text style={Item.text}><Text style={Item.strong}>Palavra:</Text> {val.item.nomePalavra}</Text>
            <Text style={Item.text}><Text style={Item.strong}>Tradução:</Text> {val.item.traducaoPalavra}</Text>
            <Text style={Item.text}><Text style={Item.strong}>Descrição:</Text> {val.item.descricaoPalavra}</Text>
          </View>
        )}
      />
    </ThemeProvider>
  )
};