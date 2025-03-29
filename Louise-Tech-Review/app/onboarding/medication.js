import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import MedicationAllergy from '../../components/onboarding/MedicationAllergy';
import NextButton from '../../components/buttons/NextButton';
import RemindMeLater from '../../components/buttons/RemindMeLater';
import theme from '../../theme';

export default function MedicationScreen() {
  const router = useRouter();
  const { userData, setUserData } = useUser();
  const { allergies } = userData.medications;

  const addAllergy = () => {
    const updatedAllergies = [...allergies, { id: Date.now(), name: "", comment: "" }];
    setUserData({ ...userData, medications: { allergies: updatedAllergies } });
  };

  const removeAllergy = (id) => {
    const updatedAllergies = allergies.filter((allergy) => allergy.id !== id);
    setUserData({ ...userData, medications: { allergies: updatedAllergies } });
  };

  const updateAllergy = (id, key, value) => {
    const updatedAllergies = allergies.map((allergy) =>
      allergy.id === id ? { ...allergy, [key]: value } : allergy
    );
    setUserData({ ...userData, medications: { allergies: updatedAllergies } });
  };

  return (
    <View style={theme.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={theme.title}>What medications are you allergic to?</Text>
          <Text style={theme.subtitle}>You can add the name of a brand or a specific chemical</Text>

          {allergies.map((item, index) => (
            <MedicationAllergy
              key={item.id}
              index={index}
              allergy={item}
              onRemove={() => removeAllergy(item.id)}
              onChange={updateAllergy}
            />
          ))}

          <TouchableOpacity style={styles.addButton} onPress={addAllergy}>
            <Image
              source={require('../../assets/icons/onboarding/Pills.png')}
              style={styles.icon}
            />
            <Text style={styles.addButtonText}>Add another medication allergy</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      <View>
        <NextButton
          onPress={() => router.push('/onboarding/completion')}
          style={styles.nextButton}
        />
        <RemindMeLater />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: theme.spacing.verticalMargin
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: theme.inputContainer.backgroundColor,
    borderRadius: theme.inputContainer.borderRadius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    margin: theme.spacing.verticalMargin
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  addButtonText: {
    color: theme.colors.text,
    fontSize: 16
  }
});
