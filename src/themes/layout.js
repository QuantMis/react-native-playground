
import { StyleSheet } from 'react-native';

const layout = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'start',
        padding: 15
    },
    circular: {
        width: 80, 
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default layout;

