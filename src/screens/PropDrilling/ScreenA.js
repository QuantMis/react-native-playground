import { View, Text, TouchableHighlight, FlatList, Button, SafeAreaView } from "react-native";
import palette from "../../themes/palette";
import typography from "../../themes/typography";
import layout from "../../themes/layout";
import Spacer from "../../components/common/Spacer";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";

ScreenA = ({ navigation }) => {
    const fruits = [
        { name: "Apple", description: "A crunchy and sweet fruit often associated with health benefits.", icon: "🍎" },
        { name: "Banana", description: "A long, curved fruit with a soft texture and sweet taste.", icon: "🍌" },
        { name: "Orange", description: "A citrus fruit known for its tangy flavor and high vitamin C content.", icon: "🍊" },
        { name: "Grapes", description: "Small, round fruits that come in various colors and can be eaten fresh or used to make wine.", icon: "🍇" },
        { name: "Strawberry", description: "A small, juicy fruit with a sweet and slightly tart flavor, commonly used in desserts.", icon: "🍓" },
    ];

    const [item, setItem] = useState({})

    goToChildA = () => {
        navigation.navigate('ChildA', item)
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
                <Text style={[typography.title, palette.onPrimary]}>Prop Drilling</Text>
                <View></View>
            </View>

            {/* State */}
            <Spacer height={30}></Spacer>
            <SafeAreaView>

                <FlatList
                    data={fruits}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight onPress={() => setItem(item)}>
                                <View style={{ padding: 10, width: "100%", alignItems: "center" }}>
                                    <Spacer height={5}></Spacer>
                                    <Text style={[palette.onPrimary, { fontSize: 100 }]}>
                                        {item['icon']}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }}
                >
                </FlatList>

            </SafeAreaView>

            {/* Navigation */}
            <Spacer height={30}></Spacer>
            <Button title="Child A" onPress={() => goToChildA()} />



        </View>
    );
}

export default ScreenA; 