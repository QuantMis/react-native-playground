import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import layout from "../../themes/layout";
import typography from "../../themes/typography";
import palette from "../../themes/palette";
import Spacer from "./Spacer";

const ListItem = ({ item }) => (
    <View style={{ padding: 15, backgroundColor: "purple", borderRadius: 10, marginBottom: 10}}>
        <View style={layout.row}>
            <Text style={[typography.headline, palette.onPrimary]}>{item.title}</Text>
            <Icon name="chevron-right" size={20} style={palette.onPrimary} />
        </View>
        <Spacer height={10}></Spacer>
        <Text style={[typography.subheadline, palette.onPrimary]}>{item.description}</Text>
        <Spacer height={10}></Spacer>
        <Text style={[typography.caption, palette.onPrimary]}>{item.date}</Text>
    </View>
);

export default ListItem;