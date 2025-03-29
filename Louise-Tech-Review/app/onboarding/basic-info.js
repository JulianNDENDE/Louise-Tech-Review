import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import BasicInfo from '../../components/onboarding/BasicInfo';
import { useUser } from '../../context/UserContext';
import theme from '../../theme';
import NextButton from '../../components/buttons/NextButton';
import RemindMeLater from '../../components/buttons/RemindMeLater';

export default function BasicInfoScreen() {
  const router = useRouter();
  const { userData } = useUser();

  const isFormComplete =
    userData.basicInfo.age &&
    userData.basicInfo.weight &&
    userData.basicInfo.height &&
    userData.basicInfo.job?.trim() !== '';

  return (
    <View style={theme.container}>
      <View>
        <Text style={theme.title}>Some basic information about you</Text>
        <Text style={theme.subtitle}>These factors can be relevant in tailoring care and advice specific to your needs.</Text>
        <BasicInfo />
      </View>

      <View>
        <NextButton
          onPress={() => router.push('/onboarding/endometriosis')}
          disabled={!isFormComplete}
        />
        <RemindMeLater />
      </View>
    </View>
  );
}

