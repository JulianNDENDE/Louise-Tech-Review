import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import BasicInfo from '../../components/onboarding/BasicInfo';
import { useUser } from '../../context/UserContext';
import theme from '../../theme';
import NextButton from '../../components/buttons/NextButton';

export default function BasicInfoScreen() {
  const router = useRouter();
  const { userData } = useUser();

  const isFormComplete =
    userData.basicInfo.age &&
    userData.basicInfo.weight &&
    userData.basicInfo.height &&
    userData.basicInfo.job?.trim() !== '';

  return (
    <View style={styles.container}>
      <View>
        <Text style={theme.title}>Some basic information about you</Text>
        <Text style={theme.subtitle}>These factors can be relevant in tailoring care and advice specific to your needs.</Text>
        <BasicInfo />
      </View>

      <NextButton
        onPress={() => router.push('/onboarding/endometriosis')}
        style={styles.nextButton}
        disabled={!isFormComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: theme.spacing.padding, 
    backgroundColor: theme.colors.background, 
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nextButton: { 
    marginTop: theme.spacing.verticalMargin,
  },
});
