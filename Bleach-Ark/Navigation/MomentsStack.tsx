import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MomentsScreen from '../Components/MomentsScreen';
import MomentDetailScreen from '../Components/MomentDetailScreen';

const Stack = createNativeStackNavigator();

const MomentsStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MomentsList" component={MomentsScreen} />
        <Stack.Screen name="MomentDetail" component={MomentDetailScreen} />
    </Stack.Navigator>
);

export default MomentsStack;
