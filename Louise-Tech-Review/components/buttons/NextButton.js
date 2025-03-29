import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme';

export default function NextButton({ onPress, style, disabled }) {
  return (
    <LinearGradient
      colors={theme.colors.nextButtonBorder}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
    >
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={[styles.nextButton, style, disabled && styles.disabledButton]}
          onPress={onPress}
          disabled={disabled}
        >
          <Text style={[styles.nextButtonText, disabled && styles.disabledText]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: theme.borderRadius + 3,
    padding: 2,
  },
  innerContainer: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.nextButtonBackground,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 29, height: 28 },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 5,
  },
  nextButton: {
    width: '100%',
    padding: theme.spacing.padding,
    backgroundColor: theme.colors.nextButtonBackground,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: theme.colors.buttonDisabled,
  },
  nextButtonText: {
    color: theme.colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledText: {
    color: theme.colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.5,
  },
});
