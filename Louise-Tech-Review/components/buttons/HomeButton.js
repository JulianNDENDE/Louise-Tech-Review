import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'expo-router';

export default function HomeButton({ onPress, style }) {
  const { setUserData } = useUser();
  const router = useRouter();

  const handlePress = () => {
    setUserData({
      objectives: { sentence: '', index: null },
      basicInfo: { age: 0, weight: 0, height: 0, job: '' },
      endometriosis: { diagnosis: '', text: '' },
      medications: { allergies: [] },
    });

    if (onPress) onPress();

    router.push('/');
  };

  return (
    <TouchableOpacity style={[styles.homeButton, style]} onPress={handlePress}>
      <Feather name="home" size={24} color={theme.colors.buttonText} />
    </TouchableOpacity>
  );
}

const styles = {
  homeButton: {
    width: '20%',
    padding: theme.spacing.padding,
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: theme.borderRadius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 29, height: 28 },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 5,
  },
};
