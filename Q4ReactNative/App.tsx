/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import data from './Data'
import Square from './Square'
import style from './style';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    // <View style={styles.container}>
    //   <NewAppScreen
    //     templateFileName="App.tsx"
    //     safeAreaInsets={safeAreaInsets}
    //   />
    // </View>
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`}></Square>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
