import { StyleSheet } from 'react-native';

const palette = StyleSheet.create({
  primary: {
    color: '#007bff', // Replace with your primary color
    // You can also add backgroundColor if needed: backgroundColor: '#007bff',
  },
  secondary: {
    color: '#6c757d', // Replace with your secondary color
    // backgroundColor: '#6c757d',
  },
  tertiary: {
    color: '#f0ad4e', // Replace with your tertiary color
    // backgroundColor: '#f0ad4e',
  },
  onPrimary: {
    color: '#ffffff', // Color for text or icons on primary color background
  },
  onSecondary: {
    color: '#ffffff', // Color for text or icons on secondary color background
  },
  onTertiary: {
    color: '#000000', // Color for text or icons on tertiary color background
  },
  // Add more colors as needed
});

export default palette;