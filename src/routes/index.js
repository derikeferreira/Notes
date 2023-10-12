import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Create from '../pages/SignIn/Create'
import Forgot from '../pages/SignIn/Forgot'
import Initial from '../pages/Initial'
import Notes from '../pages/Notes'


const Stack = createNativeStackNavigator();

export default function Routes() {
    return( 
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            {/* <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            /> */}

            {/* <Stack.Screen
                name="Create"
                component={Create}
                options={{headerShown: false}}
            /> */}

            
            {/* <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{headerShown: false}}
            /> */}

            <Stack.Screen
                name="Initial"
                component={Initial}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Notes"
                component={Notes}
                options={{headerShown: false}}
            />

    
        </Stack.Navigator>
    )
}