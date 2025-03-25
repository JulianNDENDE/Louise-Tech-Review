import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme';

export default function HomeButton({ onPress, style }) {
  return (
    <TouchableOpacity style={[styles.homeButton, style]} onPress={onPress}>
      <Feather name="home" size={24} color={theme.colors.buttonText} />
    </TouchableOpacity>
  );
}

const styles = {
  homeButton: {
    width: '30%',
    padding: theme.spacing.padding,
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
};
