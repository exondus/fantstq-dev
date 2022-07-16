import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';

function cacheImages(images: string[]) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const imageAssets = cacheImages([
          require('../assets/images/bg.png'),
          require('../assets/logos/logo.png'),
        ]);

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'bebas-neue': require('../assets/fonts/BebasNeue.ttf'),
          'poppins-regular': require('../assets/fonts/PoppinsRegular.ttf'),
          'poppins-bold': require('../assets/fonts/PoppinsBold.ttf'),
          'poppins-medium': require('../assets/fonts/PoppinsMedium.ttf'),
          'poppins-thin': require('../assets/fonts/PoppinsThin.ttf'),
          'poppins-light': require('../assets/fonts/PoppinsLight.ttf'),
        });

        // Load Images
        await Promise.all([...imageAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
