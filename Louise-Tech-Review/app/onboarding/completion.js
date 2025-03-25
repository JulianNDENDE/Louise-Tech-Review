import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import HomeButton from '../../components/buttons/HomeButton';
import NextButton from '../../components/buttons/NextButton';
import theme from '../../theme';

export default function CompletionScreen() {
  const router = useRouter();

  return (
    <View style={theme.container}>
      <View>
        <Image
          source={require('../../assets/images/onboarding/Party.png')}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />
        <Text style={theme.title}>It’s all about you</Text>
        <Text style={theme.subtitle}>
          {"Thank you for answering those questions, we will be able to tailor your experience!\n\nLet’s now move to your past fertility history."}
        </Text>
      </View>

      <View style={theme.buttonContainer}>
        <HomeButton
          onPress={() => router.push('/')}
          style={{ width: '20%' }}
        />
        <NextButton
          onPress={() => router.push('/')}
          style={{ width: '75%' }}
        />
      </View>
    </View>
  );
}
