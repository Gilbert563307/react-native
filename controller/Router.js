
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ProductsController from './ProductsController';
import Home from "../view/Home";
import Products from '../view/Products';

const Stack = createNativeStackNavigator();

export default function Router({children}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' initialRouteName>
            {(props) => (
                <Home></Home>
            )}
        </Stack.Screen>
        <Stack.Screen name='Products' component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
