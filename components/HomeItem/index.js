import { Pressable, Text,View,StyleSheet } from "react-native";

 

export default function HomeItem(onPress,title){

    return (

        // <View>

        //     <Text>HomeItem</Text>

        // </View>

        <View style = {styles.flatListContainer}>

            <Pressable onPress ={onPress } style = {styles.pressableView}>

            

            </Pressable>

        </View>

    )

}

{/* <View style ={styles.flatListContainer}>

                    <Image source = {{uri: itemData.item.thumbnail}}

                           style = {{height:200,width:160}}/>

                    <Text style = {styles.text}>{itemData.item.title}</Text>

                    </View>)} */}

 

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

        paddingBottom:32,

        borderRadius:5,

        width:160,

        height:230,

        justifyContent:"center",

        alignItems:"center"

    },

    text:{

        

        fontSize:12,

        paddingTop:5,

        

        

    },

    Image:{

        height: 200,

        width: 160

    }

    

});