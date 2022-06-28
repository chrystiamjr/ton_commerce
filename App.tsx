import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {useCallback, useEffect, useState} from "react";
import {View} from 'react-native';
import {RecoilRoot} from "recoil";

import AppIndex from "./src/ui/app_index";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        'metroRegular': require('./assets/fonts/Metropolis-Regular.otf'),
        'metroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
        'metroBold': require('./assets/fonts/Metropolis-Bold.otf'),
      });
    }

    loadFonts().then(_ => setAppIsReady(true));
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;
  return (
    <RecoilRoot>
      <View style={{flex: 1}} onLayout={onLayoutRootView}>
        <AppIndex />
      </View>
    </RecoilRoot>
  );
}
