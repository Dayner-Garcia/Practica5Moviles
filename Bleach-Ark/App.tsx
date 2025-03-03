import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import FrontPageScreen from "./Components/FrontpageScreen";
import CharactersStack from "./Navigation/CharactersStack";
import MomentsStack from "./Navigation/MomentsStack";
import AboutScreen from "./Components/AboutScreen";
import InMyLifeScreen from "./Components/InMyLifeScreen";
import ContactScreen from "./Components/ContactScreen";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={"Portada"}>
          <Drawer.Screen name={"Portada"} component={FrontPageScreen}/>
          <Drawer.Screen name={"Personajes"} component={CharactersStack}/>
          <Drawer.Screen name={"Momentos"} component={MomentsStack}/>
          <Drawer.Screen name={"Acerca de"} component={AboutScreen}/>
          <Drawer.Screen name={"En mi vida"} component={InMyLifeScreen}/>
          <Drawer.Screen name={"Contrátame"} component={ContactScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}