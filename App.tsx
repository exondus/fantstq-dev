import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ActivityIndicator } from "react-native";

import useCachedResources from 'hooks/useCachedResources';
import RootNavigation from 'navigation';
import { store } from 'store/index';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <ActivityIndicator size="large" color="black" />
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <RootNavigation />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
