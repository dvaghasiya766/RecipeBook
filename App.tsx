import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// Custom Components
import Navigation from './src/Navigation/Navigation';
import { heightPx, widthPx } from './src/Utils/Responsive';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: heightPx(100),
    width: widthPx(100),
    backgroundColor: '#fff',
  },
});

/* <SafeAreaProvider style={styles.container}>
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
    </SafeAreaProvider> */
