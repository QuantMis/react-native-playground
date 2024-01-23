import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import typography from '../themes/typography';
import palette from '../themes/palette';
import ListItem from '../components/common/ListItem';
import Spacer from '../components/common/Spacer';
import layout from '../themes/layout';
const components = [
    { title: 'Using Images', description: 'How to display images in React Native', date: '17 Jan 2024', routes:'ImagesUc'},
];
const Home = ({ navigation }) => {
    const navigateTo = (item) => {
        navigation.navigate(item.routes)
    }
    return (
        <View style={[layout.container]}>
            <Spacer height={30}></Spacer>
            <Text style={[typography.title, palette.onPrimary]}>RN Lab 🧬</Text>
            <Spacer height={20}></Spacer>
            <Text style={[typography.subheadline, palette.onPrimary]}>Use Cases ({components.length})</Text>
            <Spacer height={10}></Spacer>

            <FlatList
                data={components}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigateTo(item)}>
                        <ListItem item={item}></ListItem>
                    </TouchableOpacity>
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}


export default Home