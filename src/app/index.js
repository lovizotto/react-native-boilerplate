import MainNavigation from './navigation/MainStack';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const IndexStack = createStackNavigator()

function IndexNavigation(props) {
    return (
        <IndexStack.Navigator headerMode="none">
            <IndexStack.Screen name="Main" component={MainNavigation}/>
        </IndexStack.Navigator>
    )
}

IndexNavigation.propTypes = {

}

export default IndexNavigation

