import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View} from 'react-native';

import Home from './screens/Home';

import Account from './screens/Account';

import Search from './screens/ProductDetails';

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductContext from './context';

import ProductDetails from './screens/ProductDetails';

 

 

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

 

function BottomTabs() {

  return (

    <Tab.Navigator>

      <Tab.Screen name='Home' component={Home} />

      <Tab.Screen name='Account' component={Account} />

      {/* <Tab.Screen name='Search' component={Search} /> */}

    </Tab.Navigator>

  )

}

 

export default function App() {

  return (

    <ProductContext>

      

      <View style={styles.container}>

      <StatusBar style="auto" />

        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen options={{

              headerShown: false

              }}

 

              name='bottomTabs' component={BottomTabs} />

            <Stack.Screen

              name='ProductDetails' component={ProductDetails} />

          </Stack.Navigator>

 

        </NavigationContainer>

      </View>

    </ProductContext>

  );

}

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

 

  },

});
