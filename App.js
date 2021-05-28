import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);
 
  useEffect(
    ()=>{
      fetch('http://allanvidal.com/json-categoria-parametro.php?categoria='+cate)
      .then((resp) =>resp.json())
      .then((json)=>setDados(json.categorias))
      .catch(()=>(alert('Erro ao carregar dados')))
      .finally(()=>setCarregando(false))
    },[]
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Categorias</Text>
        <TextInput placeholder="Pesquise uma categoria" onChangeText={(value)=>setPesquisa(value)}/>
        <TouchableOpacity onPress={()=>pesquisar(pesquisa)}>
          <Text>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      {
      carregando?<ActivityIndicator/> : (
          <FlatList 
          data={dados}
          keyExtractor={({idCategoria},index)=>idCategoria} 
          renderItem={({item})=>(
            <View style={styles.flat}>
                  <Text style={styles.data1}>{item.idCategoria}</Text>
                  <Text style={styles.data2}>{item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1)}</Text>
            </View>
          )}
         />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    
  },
  viewTitle:{
    alignItems:'center'
  },
  title: {
    color:'white',
    fontSize:40,
    marginTop: 50,
    marginBottom:30,
    fontWeight:'bold',
    borderBottomWidth: 5,
    borderColor:'#9400D3',
  },
  flat: {
    flex:1,
    flexDirection:'row',
    padding:25,
    backgroundColor:'#2d2130',
    marginLeft:50,
    marginRight:50,
    marginBottom:10,
    marginTop:10,
    borderRadius:8,
  
  },
  data1: {
    fontSize:22,
    fontWeight:'bold',
    marginRight:10,
    color:'#9400D3'
  },
  data2: {
    fontSize:22,
    color:'#fff',
  }
});
