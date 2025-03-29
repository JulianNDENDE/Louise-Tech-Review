import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import NextButton from '../../components/buttons/NextButton';
import RemindMeLater from '../../components/buttons/RemindMeLater';
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

  const icons = [
    require('../../assets/icons/onboarding/Seringe.png'),
    require('../../assets/icons/onboarding/SnowFlake.png'),
    require('../../assets/icons/onboarding/QuestionMark.png'),
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
            <Image source={icons[index]} style={styles.icon} />
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <NextButton
          onPress={handleNext}
          disabled={selected === null}
        />
        <RemindMeLater />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.padding,
    marginVertical: 5,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius,
    borderColor: theme.colors.border,
    borderWidth: 2,
  },
  selected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.borderSelected,
    borderWidth: 2,
  },
  optionText: {
    color: theme.colors.buttonText,
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
