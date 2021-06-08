import React, { useEffect, useState } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { PegaPalavra, DeletarPalavra} from './Controller';
import { Header, Item } from './Style';
import { ThemeProvider, Input, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
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
              buttonStyle={{ backgroundColor: '#9400D399', width: '70%', alignSelf: 'center', paddingVertical: 10, borderColor: 'white', borderWidth: .3, borderRadius: 4 }}
              icon={<Icon name='plus' size={20} color='white' />}
              titleStyle={{ color: 'white', marginLeft: 6 }} // pode tirar essa fita
              onPress={() => {
                props.navigation.navigate('Register');
              }}
            />

            <StatusBar translucent={false} />
          </View>
        }
        data={Render}
        keyExtractor={(val, index) => val.idPalavra}
        renderItem={val => (
          <View style={Item.View}>
            <Text style={Item.text}><Text style={Item.strong}>ID: </Text>{val.item.idPalavra}</Text>
            <Text style={Item.text}><Text style={Item.strong}>Palavra:</Text> {val.item.nomePalavra}</Text>
            <Text style={Item.text}><Text style={Item.strong}>Tradução:</Text> {val.item.traducaoPalavra}</Text>
            <Text style={Item.text}><Text style={Item.strong}>Descrição:</Text> {val.item.descricaoPalavra}</Text>

            <Button
              type='clear'
              buttonStyle={
                { marginTop: 5, borderColor: '#9400D3aa', borderWidth: .8, borderRadius: 4, paddingVertical: 6 }}
              onPress={async() => {
                if(val.item.idPalavra != null){
                  let id = val.item.idPalavra;
                  let res = await DeletarPalavra(id);
                  console.log(res);
                  setPesquisa('');
                }
              }} title='Delete' titleStyle={Item.text} />
            <Button
              type='clear'
              buttonStyle={
                { marginTop: 5, borderColor: '#9400D3aa', borderWidth: .8, borderRadius: 4, paddingVertical: 6 }}
              onPress={() => {
                props.navigation.navigate('Register',{data: val.item, textTitle: 'Update'});
              }} title='Update' titleStyle={Item.text} />
          </View>
        )}
      />
    </ThemeProvider>
  )
};