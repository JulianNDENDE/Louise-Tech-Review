import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import NextButton from '../../components/buttons/NextButton';
import theme from '../../theme';

export default function ObjectivesScreen() {
  const { userData, setUserData } = useUser();
  const [selected, setSelected] = useState(userData.objectives.index);
  const router = useRouter();

  const options = [
    'I have an ongoing or future ART treatment',
    'I want to freeze my eggs',
    "I'm unsure of my fertility status & haven't planned a treatment",
  ];

  const handleNext = () => {
    if (selected !== null) {
      setUserData(prev => ({
        ...prev,
        objectives: { sentence: options[selected], index: selected }
      }));
      router.push('/onboarding/basic-info');
    }
  };

  return (
    <View style={theme.container}>
      <View>
        <Text style={theme.title}>What is your objective?</Text>
        <Text style={theme.subtitle}>Your objective helps us understand your needs and offer relevant advice on next steps</Text>

        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.option, selected === index && styles.selected]}
            onPress={() => setSelected(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <NextButton
        onPress={handleNext}
        disabled={selected === null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  option: {
    padding: theme.spacing.padding,
    marginVertical: 5,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius
  },
  selected: {
    backgroundColor: theme.colors.primary
  },
  optionText: {
    color: theme.colors.buttonText,
    fontSize: 16
  },
});
