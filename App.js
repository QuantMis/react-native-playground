import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import typography from './themes/typography';
import palette from './themes/palette';
import layout from './themes/layout';

const Spacer = ({ height, width }) => <View style={{ height, width }} />;

export default function App() {
  var logoImg = require("./assets/adaptive-icon.png");
  var networkImg = "https://picsum.photos/200/300";

  const components = [
    { key: 'Image', description: 'Image is used for Implementing asset images of network images', date: '17 Jan 2024'},
  ];

  return (
    <View style={[styles.container]}>
      <Spacer height={30}></Spacer>
      <Text style={[typography.title, palette.onPrimary]} >🐢 Playground</Text>
      <Spacer height={20}></Spacer>
      <Text style={[typography.subheadline, palette.onPrimary]}>React Native Components</Text>
      <Spacer height={10}></Spacer>
      <FlatList
        data={components}
        renderItem={({ item }) =>

          <View style={{padding: 15, backgroundColor: "gray", borderRadius: 10}}>
            <View style={layout.row}>
              <Text style={[typography.headline, palette.onPrimary]}>{item.key}</Text>
              <Icon name="chevron-right" size={20} style={palette.onPrimary}/>
            </View>
            <Spacer height={10}></Spacer>
            <Text style={[typography.subheadline, palette.onPrimary]}>{item.description}</Text>
            <Spacer height={10}></Spacer>
            <Text style={[typography.caption, palette.onPrimary]}>{item.date}</Text>
          </View>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'start',
    justifyContent: 'start',
    padding: 15
  },
});