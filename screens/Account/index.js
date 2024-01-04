import React, {useState} from 'react';

import {View, Text, TextInput, Button,StyleSheet,} from 'react-native';

 

const Account = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

 

  const handleLogin = () => {

    if (username === 'example' && password === 'password') {

      setIsLoggedIn(true);

    } else {

      alert('invalid Credentials');

    }

  };

 

  const handleLOgout = () => {

    setIsLoggedIn(false);

    setUsername('');

    setPassword('');

  };

 

 

  const [title,setTitle] = useState('');


  const [rating,setRating] = useState('');

  const [brand,setBrand] = useState('');

 

 

  const saveData= async() => {

        const url = "https://dummyjson.com/";

        let result = await fetch(url,{

            method :"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify(title,price,rating,brand)

        })

  }

 

  return (

    <View style = {styles.container}>

      

      {isLoggedIn ? (

        <View style = {styles.innercontainer}>

            <Text>User InforMation</Text>

        <View style = {styles.input}>

          

          <TextInput style = {styles.input1}

          value = {title}

          onChangeText = {(text)=>setTitle(text)}

          placeholder = 'Enter Title' /></View>

 

          

 

        <View style = {styles.input}>

          <TextInput style = {styles.input1}

          value = {rating}

          onChangeText = {(text) => setRating(text)}

          placeholder = 'Enter Rating' /></View>

 

 

        <View style = {styles.input}>

          <TextInput style = {styles.input1}

          value = {brand}

          onChangeText = {(text)=>setBrand(text)}

          placeholder = 'Enter Brand' /></View>

 

 

          <Button title="Add Product" onPress={saveData} />

          <Button title="Logout" onPress={handleLOgout} />

        </View>

      ) : (

        <View style = {styles.innercontainer}>

        <View style = {styles.input}>

          <TextInput

            placeholder="Username" textAlign='center'

            value={username}

            onChangeText={text => setUsername(text)}

          />

        <View style = {styles.input}>

          <TextInput

            placeholder="Password" textAlign='center'

            secureTextEntry={true}

            value={password}

            onChangeText={text => setPassword(text)}

          /></View>

        <View style = {styles.innercontainer}>

        <View style = {styles.button}>

          <Button title="Login" onPress={handleLogin}/>

        </View>

        </View>

        </View>

        </View>

      )}

    </View>

  );

};

 

export default Account;

 

 

 

const styles = StyleSheet.create({

container:{

    paddingTop :20,

    paddingBottom :20,

    paddingHorizontal :30,

    

    margin :10,

    

    height : 600

},innercontainer:{

    paddingTop :50,

    paddingBottom :20,

    paddingHorizontal :30,

    

    margin :10,

    

    height : 600

},

input:{

    height:30,

    borderWidth:0.5,

    borderColor : '#000000',

    

    marginVertical:10,

    backgroundColor :"#ffffff",

    borderRadius : 10

    

},button:{

    

     height: 200,

    

    flex:1,

    alignContent: 'center'

},input1:{

    borderColor:"#87CEEB",

    borderWidth:1,

    

}

});