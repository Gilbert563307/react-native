

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../view/Home";
import LadingOverview from '../view/LadingOverview';
import ListNounsView from '../view/nouns/ListNounsView';
import CreateNounView from '../view/nouns/CreateNounView';
import ReadNounView from '../view/nouns/ReadNounView';
import UpdateNounView from '../view/nouns/UpdateNounView';
import DeleteNounView from '../view/nouns/DeleteNounView';
import LandingUsersView from "../view/users/LandingUsersView";
import CollectListUsersView from "../view/users/CollectListUsersView";
import CollectReadUser from "../view/users/CollectReadUser";
import CollectUpdateUser from "../view/users/CollectUpdateUser";

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
          <Stack.Screen name="LandingUsersView" component={LandingUsersView} />
          <Stack.Screen name="ListUsersView" component={CollectListUsersView} />
          <Stack.Screen name="CollectReadUser" component={CollectReadUser}  />
          <Stack.Screen name="CollectUpdateUser" component={CollectUpdateUser} />
      </Stack.Navigator>
  )
}

export default Router;
