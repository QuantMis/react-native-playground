import { View, Text, TouchableHighlight, Dimensions, FlatList } from "react-native"
import layout from "../themes/layout"
import Spacer from "../components/common/Spacer"
import Icon from 'react-native-vector-icons/FontAwesome';
import palette from "../themes/palette";
import typography from "../themes/typography";
import { StyleSheet } from "react-native";

LayoutUc = ({ navigation }) => {
    const items = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
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
                <Text style={[typography.title, palette.onPrimary]}>Layout</Text>
                <View></View>
            </View>

            {/* Stack */}
            <Spacer height={30}></Spacer>
            <Text style={[typography.subtitle, palette.onPrimary]}>Stack</Text>
            <Spacer height={10}></Spacer>
            <View style={{ alignItems: "center" }}>
                <View style={styles.purpleBox}>
                </View>
                <View style={styles.greenBox}>
                    <Text style={typography.title}>STACK</Text>
                </View>
            </View>

            {/* Row */}
            <Spacer height={30}></Spacer>
            <Text style={[typography.subtitle, palette.onPrimary]}>Row</Text>
            <Spacer height={10}></Spacer>
            <View style={styles.rowContainer}>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
                <View style={styles.whiteBox}></View>
            </View>

            {/* Row */}
            <Spacer height={30}></Spacer>
            <Text style={[typography.subtitle, palette.onPrimary]}>Grid</Text>
            <Spacer height={10}></Spacer>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.greenBox2}><Text style={[typography.title, palette.onPrimary]}>{item}</Text></View>
                )}
                numColumns={3}
            ></FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        gap: 5
    },
    greenBox2: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        margin: 10

    },
    whiteBox: {
        width: "10%",
        height: 40,
        backgroundColor: "white"
    },
    purpleBox: {
        width: "100%",
        height: 200,
        backgroundColor: "purple"
    },
    greenBox: {
        position: 'absolute',
        width: "40%",
        height: 100,
        backgroundColor: "seagreen",
        alignItems: "center",
        justifyContent: "center",
        top: 50,
        bottom: 50
    },

});

export default LayoutUc