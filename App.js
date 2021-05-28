import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';

export default function App() {
  const [pesquisa, setPesquisa] = useState(null);
  const [Render, setRender] = useState([]);

  useEffect(() => {
    fetch('http://192.168.15.8/Escola/2_bimestre/Interdisciplinar/Controllers/PegaPalavra.php?term='+pesquisa)
    .then(val => {
      val.json().then(val => {
        console.log(pesquisa.length);
        if(pesquisa != null && pesquisa.length != 0){
          setRender(val)
        }else{setRender([])}
      }).catch(err => {
        alert(err);
      })
    })
  }, [pesquisa])

  return (

    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.title}>Words</Text>
          <View style={styles.viewTitle}>
            <TextInput style={styles.text} placeholder="Pesquise uma categoria" onChangeText={text => setPesquisa(text)} />
            <TouchableOpacity activeOpacity={0.8} style={styles.button} >
              <Text style={styles.textBtn}>Pesquisar</Text>
            </TouchableOpacity>
          </View>
          <StatusBar translucent={false} />
        </View>
      }
      data={Render}
      keyExtractor={(val, index) => val.idPalavra}
      renderItem={val => (
        <View style={styles.flat}>
          <Text style={styles.data2}>ID: {val.item.idPalavra}</Text>
          <Text style={styles.data2}>Palavra: {val.item.nomePalavra}</Text>
          <Text style={styles.data2}>Tradução: {val.item.traducaoPalavra}</Text>
          <Text style={styles.data2}>Descrição: {val.item.descricaoPalavra}</Text>
        </View>
      )}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    paddingHorizontal: 10,
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    backgroundColor: '#ddd',
    borderRadius: 4,
    borderWidth: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderLeftWidth: 1,
    backgroundColor: "#9400D366",
  },
  title: {
    color: '#9400D3',
    fontSize: 40,
    margin: 20,
    textAlign: 'center',
    letterSpacing: 1,
    fontWeight: '100',
  },
  flat: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    backgroundColor: '#2d2130',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 4,
  },
  data2: {
    fontSize: 16,
    paddingBottom: 5,
    color: '#fff',
  }
  , textBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
    flexGrow: 2,
  }
});
