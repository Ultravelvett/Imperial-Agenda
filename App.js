import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Homepage } from './src/screens';
export default function App() {
  // aqui vamos a cargar la letra
  const [loaded] = useFonts({ 
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
   });
   if (!loaded) { 
    // tenemos que escribir que e esta cargando la app(la letra)
    return <AppLoading/>
  }else{
    return (
     <Homepage/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
