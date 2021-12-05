import * as React  from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import rootReducers from './src/store/reducers'
import Login from './src/components/Login'
import Edit from './src/components/Edit'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const store = createStore(rootReducers)
const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;
