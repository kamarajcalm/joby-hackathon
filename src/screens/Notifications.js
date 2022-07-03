import { Divider, View } from "native-base";
import React from "react";
import {StyleSheet,Dimensions} from 'react-native'
import NavBar from "../components/NavBar";
import {FlatList,Text} from 'native-base';
const {height,width} = Dimensions.get("window")
import { AntDesign } from "@expo/vector-icons";
import { textStyles } from "../styles";
const data =[
    {
        title:"hi , i have a Job for u",
        time:"6 days ago"
    },
    {
        title:"hi , i have a Job for u",
        time:"6 days ago"
    },
    {
        title:"hi , i have a Job for u",
        time:"6 days ago"
    },
    {
        title:"hi , i have a Job for u",
        time:"6 days ago"
    },
    {
        title:"hi , i have a Job for u",
        time:"6 days ago"
    },
    {
        title:"hi , i have a Job for u",
        time:"6 days ago"
    },
]
const Notifications = ()=>{

 return(
    <View> 
      <NavBar 
        title={"Notifications"}
      />
      <FlatList 
        ItemSeparatorComponent={()=><Divider />}
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,index})=>{
            return (
              <View style={styles.container}>
                <View flex={0.2} style={[styles.center]}>
                  <AntDesign name="gift" size={24} color="black" />
                </View>
                <View flex={0.8} justifyContent={"center"}>
                  <View>
                    <Text style={[textStyles.normal, { color: "#000" }]}>
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <Text style={[textStyles.normal, { color: "gray" }]}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            );
   
        }}
      />
    </View>
 )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    height:height*0.1,

  },
  center:{
    alignItems:"center",
    justifyContent:'center'
  }
})
export default Notifications;