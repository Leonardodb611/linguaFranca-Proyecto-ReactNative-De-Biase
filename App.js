import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';


init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });

export default function App() {
  return (
    <Provider store={store}>
     <AppNavigation style={styles.container} />
    </Provider>
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
