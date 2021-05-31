import React, { useEffect, useState } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { PegaPalavra } from './Controller';
import { Header, Item } from './Style';
import { ThemeProvider, Input, Text, } from "react-native-elements";
export default function App() {
  const [pesquisa, setPesquisa] = useState(null);
  const [Render, setRender] = useState([]);
  const color = ['#9400D3', '#2d2130'];
  useEffect(() => {
    if(pesquisa != null && pesquisa.length != 0){
      PegaPalavra(pesquisa)
        .then(val=>{
          setRender(JSON.parse(val));
        }) 
    }else setRender([]);
  }, [pesquisa])
  return (
    <ThemeProvider>
      <FlatList
        style={Header.View}
        ListHeaderComponent={
          // <View style={styles.container}>
          //   <Text style={styles.title}>Words</Text>
          //   <View style={styles.viewTitle}>
          //     <TextInput style={styles.text} placeholder="Pesquise uma categoria" onChangeText={text => setPesquisa(text)} />
          //     <TouchableOpacity activeOpacity={0.8} style={styles.button} >
          //       <Text style={styles.textBtn}>Pesquisar</Text>
          //     </TouchableOpacity>
          //   </View>
          //   <StatusBar translucent={false} />
          // </View>
            <View>
              <Text h1 h1Style={Header.h1}>STerms</Text>
              <Input
               value={pesquisa}
               placeholder='Search for a term...'
               onChangeText={val=>setPesquisa(val)}
               label='Term'
               labelStyle={{color: "white"}}
               inputContainerStyle={Header.input}
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
          </View>
        )}
      />
    </ThemeProvider>
  )
};