import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersScreen from "../Components/CharactersScreen";
import CharacterDetailScreen from "../Components/CharacterDetailScreen";

const Stack = createNativeStackNavigator();

const CharactersStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CharactersList" component={CharactersScreen} />
            <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
        </Stack.Navigator>
    );
};

export default CharactersStack;
