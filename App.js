import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import ImagesUc from './src/screens/ImagesUc';
import LayoutUc from './src/screens/LayoutUc';
import NetworkUc from './src/screens/NetworkUc';
import StatefulUc from './src/screens/StatefulUc';
import ScreenA from './src/screens/PropDrilling/ScreenA';
import ChildA from './src/screens/PropDrilling/ChildA';
import ChildB from './src/screens/PropDrilling/ChildB';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImagesUc" component={ImagesUc} />
        <Stack.Screen name="LayoutUc" component={LayoutUc} />
        <Stack.Screen name="NetworkUc" component={NetworkUc} />
        <Stack.Screen name="StatefulUc" component={StatefulUc} />
        <Stack.Screen name="PropDrillingUc" component={ScreenA} />
        <Stack.Screen name="ChildA" component={ChildA} />
        <Stack.Screen name="ChildB" component={ChildB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

