import { StatusBar, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
// Custom Components
import Navigation from './src/Navigation/Navigation';
import { store } from './src/Store/Redux/Store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <Navigation />
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: heightPx(100),
//     width: widthPx(100),
//     backgroundColor: '#fff',
//   },
// });

// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
/* <SafeAreaProvider style={styles.container}>
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
    </SafeAreaProvider> */

// import FavoritesContextProvider from './src/Store/Context/FavoritesContextProvider';
