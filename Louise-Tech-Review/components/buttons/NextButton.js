import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import theme from '../../theme';

export default function NextButton({ onPress, style, disabled }) {
  return (
    <TouchableOpacity 
      style={[styles.nextButton, style, disabled && styles.disabledButton]} 
      onPress={onPress} 
      disabled={disabled}
    >
      <Text style={[styles.nextButtonText, disabled && styles.disabledText]}>Next</Text>
    </TouchableOpacity>
  );
}

const styles = {
  nextButton: {
    width: '100%',
    padding: theme.spacing.padding,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: theme.colors.buttonDisabled,
  },
  nextButtonText: { 
    color: theme.colors.buttonText, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  disabledText: {
    color: theme.colors.buttonText, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
};
