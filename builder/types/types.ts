interface ExpoConfig {
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

