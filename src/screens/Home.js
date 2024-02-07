import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import typography from '../themes/typography';
import palette from '../themes/palette';
import ListItem from '../components/common/ListItem';
import Spacer from '../components/common/Spacer';
import layout from '../themes/layout';
const components = [
    { title: 'Images', description: 'Display images in React Native', date: '17 Jan 2024', routes: 'ImagesUc', active: true },
    { title: 'Layout', description: 'Layouts in React Native', date: '23 Jan 2024', routes: 'LayoutUc', active: true },
    { title: 'Network', description: 'Simple Network Calls: Http Get', date: '23 Jan 2024', routes: 'NetworkUc', active: true },
    { title: 'Stateful', description: 'Making a View Stateful in React Native', date: '6 Jan 2024', routes: 'StatefulUc', active: true },
    { title: 'Prop Drilling', description: 'Drill props deeply to childrens component', date: '6 Jan 2024', routes: 'PropDrillingUc', active: true },
    { title: 'Context API', description: 'Sharing states between multiple views', date: '6 Jan 2024', routes: 'StatefulUc', active: true },
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
                    <TouchableHighlight onPress={() => item.active ? navigateTo(item) : console.log("Still In Development")}>
                        <ListItem item={item}></ListItem>
                    </TouchableHighlight>
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}


export default Home