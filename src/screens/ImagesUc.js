import { View, Text, TouchableHighlight, Image, ScrollView, SafeAreaView, PanResponder, ImageBackground } from "react-native"
import layout from "../themes/layout"
import { StatusBar } from "expo-status-bar"
import palette from "../themes/palette"
import typography from "../themes/typography"
import Spacer from "../components/common/Spacer"
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useRef, useState } from 'react';

ImagesUc = ({ navigation }) => {
    // Image pi
    const imageArray = ["https://picsum.photos/200/400", "https://picsum.photos/200/300"]
    const [imageIndex, setImageIndex] = useState(0);

    // Profile pics views
    const totalPics = 20;
    let profilePics = [];

    // Gesture Detector
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                if (gestureState.dx > 100) {
                    if (imageIndex > 0) {
                        console.log("shud trigger")
                        let index = imageIndex - 1;
                        setImageIndex(imageIndex - 1)
                    }
                } else if (gestureState.dx < 100) {
                    if (imageIndex < imageArray.length) {
                        setImageIndex(imageIndex + 1)
                    }
                }
            },
            onPanResponderRelease: () => {
            },
        })
    ).current;

    for (let i = 0; i <= totalPics; i++) {
        profilePics.push(<Image
            style={layout.circular}
            source={{
                uri: 'https://picsum.photos/200/300',
            }}
            resizeMode="fit"
        />);
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
                <Text style={[typography.title, palette.onPrimary]}>Images</Text>
                <View></View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Profile Picture */}
                <Spacer height={30}></Spacer>
                <Text style={[typography.subtitle, palette.onPrimary]}>Profile Pictures</Text>
                <Spacer height={10}></Spacer>

                <SafeAreaView>
                    <ScrollView horizontal pagingEnabled>

                        <View style={[layout.row, { gap: 20 }]}>
                            {profilePics}
                        </View>
                    </ScrollView>
                </SafeAreaView>

                {/* Caroussels */}
                <Spacer height={30}></Spacer>
                <Text style={[typography.subtitle, palette.onPrimary]}>Caroussels</Text>
                <Spacer height={10}></Spacer>


                <Image
                    style={{ width: '100%', height: 400, borderRadius: 20 }}
                    source={{
                        uri: imageArray[imageIndex]

                    }}
                    resizeMode="fit"
                    {...panResponder.panHandlers}
                />


                {/* Image Background */}
                <Spacer height={30}></Spacer>
                <Text style={[typography.subtitle, palette.onPrimary]}>Image as Background</Text>
                <Spacer height={10}></Spacer>

                <ImageBackground
                    source={{
                        uri: imageArray[imageIndex]
                    }}
                    resizeMode="cover"
                    style={{ height: 400, alignItems: "center", justifyContent: "center" }}
                >
                    <Text style={[typography.title, palette.onPrimary]}>Image as Background</Text>
                </ImageBackground>
            </ScrollView>






            <StatusBar style="auto"></StatusBar>
        </View>
    )
}

export default ImagesUc