
import { StyleSheet } from 'react-native';

const layout = StyleSheet.create({
    row: {
        flexDirection: 'row', // Align children in a horizontal row
        alignItems: 'center', // Optional, for vertical alignment
        justifyContent: 'space-between', // Optional, for horizontal spacing
        // Add any additional styling as needed
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'start',
        justifyContent: 'start',
        padding: 15
      },
});

export default layout;

