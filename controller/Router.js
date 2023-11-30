

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../view/Home";
import LadingOverview from '../view/LadingOverview';
import ListNounsView from '../view/ListNounsView';
import CreateNounView from '../view/CreateNounView';
import ReadNounView from '../view/ReadNounView';
import UpdateNounView from '../view/UpdateNounView';
import DeleteNounView from '../view/DeleteNounView';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name="LandingView" component={LadingOverview} />
          <Stack.Screen name="CreateNounView" component={CreateNounView} />
          <Stack.Screen name="ReadNounView" component={ReadNounView} />
          <Stack.Screen name="UpdateNounView" component={UpdateNounView} />
          <Stack.Screen name="DeleteNounView" component={DeleteNounView} />
          <Stack.Screen name="ListNounsView" component={ListNounsView} />
      </Stack.Navigator>
  )
}

export default Router;
