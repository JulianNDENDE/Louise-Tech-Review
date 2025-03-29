import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
        <Text style={styles.biggerTitle}>It’s all about you</Text>
        <Text style={styles.biggerSubtitle}>
          {"Thank you for answering those questions, we will be able to tailor your experience!\n\nLet’s now move to your past fertility history."}
        </Text>
      </View>

      <View style={theme.buttonContainer}>
        <HomeButton
          onPress={() => router.push('/')}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <NextButton onPress={() => router.push('/')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  biggerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  biggerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
});