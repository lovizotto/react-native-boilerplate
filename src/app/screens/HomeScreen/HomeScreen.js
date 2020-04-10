import { Animated, Button, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
    const [toggleText, setToggleText] = useState(false)
    const animateLeft = useRef(new Animated.Value(0)).current;
    const fontSizeAnimation = animateLeft.interpolate({
        inputRange: [0, 100],
        outputRange: [14, 36]
    })
    const color = animateLeft.interpolate({
        inputRange: [0, 100],
        outputRange: ['red', 'green']
    })

    useEffect(() => {
        Animated.spring(animateLeft, {
            toValue: toggleText ? 100 : 0,
            bounciness: 1,
            speed: .1
        }).start();
    }, [toggleText])

    return (
        <View>
            <TouchableOpacity onPress={() => setToggleText(!toggleText)} >
                <Animated.View style={{ width: 100, backgroundColor: color, height: fontSizeAnimation, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>My Button</Text>
                </Animated.View>
            </TouchableOpacity>
            <Animated.Text style={{color: color, fontSize: fontSizeAnimation, transform: [{translateY: animateLeft}]}}>Olá mundo!
            </Animated.Text>
        </View>
    );
}

HomeScreen.propTypes = {
    navigation: PropTypes.any,
};

export default HomeScreen;
