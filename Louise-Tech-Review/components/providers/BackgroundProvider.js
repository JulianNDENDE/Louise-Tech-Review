import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BackgroundProvider = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/onboarding/Background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default BackgroundProvider;
