import { ActivityIndicator, Text, View, StyleSheet,Image, FlatList} from "react-native";

import { useContext } from "react";

import { Context } from "../../context";

import { HomeItem } from "../../components/HomeItem"

import { useNavigation } from "@react-navigation/native";

 

 

 

export default function Home() {

 

    const { loading, products } = useContext(Context)

    

 

    const navigation = useNavigation()

 

 

    if (loading) {

        return (

            <ActivityIndicator style={styles.loader} color={'red'} size={'large'} />

        )

    }

 

    const handleOnPress=(getId)=> {

        navigation.navigate('ProductDetails',{

        productId : getId,

        });

    }

 

 

    return (

        <View>

            <FlatList

                data={products}

                renderItem={(itemData) =>

                (

                

                <View style ={styles.flatListContainer}>

                    <Image source = {{uri: itemData.item.thumbnail}}

                           style = {styles.tinyLogo } />

                    <Text style = {styles.text} onPress = {()=>handleOnPress(itemData.item.id)}>{itemData.item.title}</Text>

                    </View>)}

                

                

                keyExtractor={(itemData) => itemData.id}

                 />

        </View>

    )

}

 

 

 

const styles = StyleSheet.create({

    loader: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center'

    },

    flatListContainer:{

        backgroundColor:"#D3D3D3",

        marginVertical:10,

        marginHorizontal:5,

        marginLeft:20,

        marginRight:10,

        paddingBottom:3,

        borderRadius:5,

        width:360,

        height:200,

        justifyContent:"center",

        alignItems:"center"

    },

    text:{

        // color:"FFFFFF",

        fontSize:12,

        paddingTop:8,

        

        // backgroundColor:"FFFFFF"

    },

    tinyLogo:{

        width :300,

        height:150

    }

 

    

})