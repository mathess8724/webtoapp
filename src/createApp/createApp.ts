export interface CreateApp {
 url: string;
}

export interface ExpoConfig {
    expo: {
        name: string;
        slug: string;
        version: string;
        orientation: "portrait" | "landscape";
        icon: string;
        userInterfaceStyle: "light" | "dark";
        splash: {
            image: string;
            resizeMode: "contain" | "cover" | "stretch";
            backgroundColor: string;
        };
        assetBundlePatterns: string[];
        ios: {
            supportsTablet: boolean;
        };
        android: {
            adaptiveIcon: {
                foregroundImage: string;
                backgroundColor: string;
            };
            package: string;
        };
        web: {
            favicon: string;
        };
        extra: {
            eas: {
                projectId: string;
            };
        };
        owner?: string;
    };
}

export const jsonBase: ExpoConfig = 
{
    "expo": {
      "name": "templateApp",
      "slug": "appbuilder",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        },
        "package": "com.webtoapp.appbuilder"
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "extra": {
        "eas": {
          "projectId": "57cba942-50ad-4153-b541-dae3cf154758"
        }
      },
      "owner": "webtoapp"
    }
  }
  