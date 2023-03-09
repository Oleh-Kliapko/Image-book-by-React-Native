import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { fonts } from "../utils/fonts";

export const useFonts = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          [fonts.robotoRegular]: require("../../../assets/fonts/Roboto-Regular.ttf"),
          [fonts.robotoMedium]: require("../../../assets/fonts/Roboto-Medium.ttf"),
          [fonts.robotoBold]: require("../../../assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  return { isReady, onLayoutRootView };
};
