import * as React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MyScreen from './MyScreen';
import DeliverScreen from './DeliverScreen';
import SubScreen from './SubScreen';
import FindScreen2 from './FindScreen2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '메인'}}
        />
        <Stack.Screen
          name="MyScreen"
          component={MyScreen}
          options={{ title: 'My' }}
        />
        <Stack.Screen
          name="DeliverScreen"
          component={DeliverScreen}
          options={{ title: '배달하기' }}
        />
        <Stack.Screen
          name="SubScreen"
          component={SubScreen}
          options={{ title: '정기구독' }}
        />
        <Stack.Screen
          name="FindScreen2"
          component={FindScreen2}
          options={{ title: '상품찾기' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;