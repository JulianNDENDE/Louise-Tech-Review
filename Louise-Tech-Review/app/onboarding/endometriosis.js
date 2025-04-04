import { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import theme from '../../theme';
import NextButton from '../../components/buttons/NextButton';
import RemindMeLater from '../../components/buttons/RemindMeLater.js'
import EndometriosisOptions from '../../components/onboarding/EndometriosisOptions';

export default function EndometriosisScreen() {
  const router = useRouter();
  const { setUserData } = useUser();
  const [selected, setSelected] = useState(null);

  const options = [
    { text: "Yes, it was diagnosed", image: require('../../assets/images/onboarding/ThumbsUp.png'), diagnosis: 'positive' },
    { text: "No", image: require('../../assets/images/onboarding/ThumbsDown.png'), diagnosis: 'negative' },
    { text: "I think I may have it but it wasn’t diagnosed", image: require('../../assets/images/onboarding/QuestionMark.png'), diagnosis: 'suspected' },
  ];

  return (
    <View style={theme.container}>
      <View>
        <Text style={theme.title}>Do you have endometriosis?</Text>
        <EndometriosisOptions
          options={options}
          selected={selected}
          setSelected={setSelected}
          setUserData={setUserData}
        />
      </View>

      <View>
        <NextButton
          onPress={() => router.push('/onboarding/medication')}
          disabled={selected === null}
        />
        <RemindMeLater />
      </View>
    </View>
  );
}
