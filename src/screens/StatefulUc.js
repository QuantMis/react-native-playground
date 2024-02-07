import { View, Text, TouchableHighlight, Button } from "react-native";
import { useState } from "react";
import layout from "../themes/layout";
import Spacer from "../components/common/Spacer";
import Icon from 'react-native-vector-icons/FontAwesome';
import palette from "../themes/palette";
import typography from "../themes/typography";

StatefulUc = ({ navigation }) => {
    const [number, setNumber] = useState(0);
    incrementNumber = () => {
        let current = number;
        current++;
        setNumber(current);
    }

    return (
        <View style={layout.container}>
            {/* Header */}
            <Spacer height={30}></Spacer>
            <View style={[layout.row, { justifyContent: "space-between" }]}>
                <TouchableHighlight onPress={() => {
                    navigation.pop();
                }}>
                    <Icon name="arrow-left" size={30} style={palette.onPrimary} />
                </TouchableHighlight>
                <Text style={[typography.title, palette.onPrimary]}>Stateful</Text>
                <View></View>
            </View>
            <Spacer height={30}></Spacer>
            {/* Numbers */}
            <Text style={{ color: "white", fontSize: 200, alignSelf: "center" }}>{number}</Text>
            <Spacer height={30}></Spacer>
            {/* Button */}
            <Button
                title="Increment"
                onPress={incrementNumber}
            />
        </View>
    );
}

export default StatefulUc