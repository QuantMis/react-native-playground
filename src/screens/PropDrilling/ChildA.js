import { View, Text, TouchableHighlight, Button } from "react-native";
import layout from "../../themes/layout";
import palette from "../../themes/palette";
import typography from "../../themes/typography";
import Spacer from "../../components/common/Spacer";
import Icon from 'react-native-vector-icons/FontAwesome';


ChildA = ({ navigation, route }) => {
    const item = route.params;

    goToChildB = () => {
        navigation.navigate('ChildB', item);
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
                <Text style={[typography.title, palette.onPrimary]}>Child A</Text>
                <View></View>
            </View>
            {/* Item */}
            <Spacer height={30}></Spacer>
            <Text style={[palette.onPrimary, {fontSize: 100, alignSelf: "center"}]}>{item['icon']}</Text>

            {/* Navigation */}
            <Spacer height={30}></Spacer>
            <Button title="Child B" onPress={()=>goToChildB()}/>
        </View>
    );
}
export default ChildA;