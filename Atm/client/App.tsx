import * as React  from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import rootReducers from './src/store/reducers'
import Login from './src/components/Login'
import Home from './src/components/Home'
import Register from './src/components/Register'
import Queue from './src/components/Queue'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const store = createStore(rootReducers)
const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Queue" component={Queue} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;
