import { ActivityIndicator, FlatList, View, Text, TouchableHighlight, Image } from "react-native"
import { useEffect, useState } from "react"
import typography from "../themes/typography";
import palette from "../themes/palette";
import layout from "../themes/layout";
import Spacer from "../components/common/Spacer";
import Icon from 'react-native-vector-icons/FontAwesome';

NetworkUc = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [digimonList, setDigimonList] = useState([]);

    const getDigimonList = async () => {
        try {
            const response = await fetch("https://digivel.sulaimanmisri.com/api/v1/list");
            const json = await response.json();
            console.log(json)
            setDigimonList(json["data"]);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log("UseEffect Invoked");
        getDigimonList();
    }, []);

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
                <Text style={[typography.title, palette.onPrimary]}>Network Calls</Text>
                <View></View>
            </View>
            <Spacer height={30}></Spacer>
            {isLoading ? <ActivityIndicator></ActivityIndicator> :
                <FlatList
                    data={digimonList}
                 numColumns={2} 
                    renderItem={({ item }) => {
                        return (
                            <View style={{padding: 10, width: "50%", alignItems: "center"}}>
                                <Image
                                    style={{ width: "100%", height: 170, borderRadius: 20 }}
                                    source={{
                                        uri: item['image']

                                    }}
                                    resizeMode="fit"
                                />
                                <Spacer height={5}></Spacer>
                                <Text style={[typography.headline, palette.onPrimary]}>
                                    {item['name']}
                                </Text>
                            </View>
                        )
                    }}
                >
                </FlatList>}
        </View>)
}

export default NetworkUc