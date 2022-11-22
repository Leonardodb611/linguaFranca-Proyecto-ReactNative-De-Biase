import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';


export default function App() {
  return (
    <AppNavigation style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efb6d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
