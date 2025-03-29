import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '../../context/UserContext';
import theme from '../../theme';
import { useRouter } from 'expo-router';

export default function RemindMeLater() {
  const { setUserData } = useUser();
  const router = useRouter();

  const resetUserData = () => {
    setUserData({
      objectives: { sentence: '', index: null },
      basicInfo: { age: 0, weight: 0, height: 0, job: '' },
      endometriosis: { diagnosis: '', text: '' },
      medications: { allergies: [] },
    });
    router.push('/');
  };

  return (
    <TouchableOpacity onPress={resetUserData} style={styles.container}>
      <Text style={styles.text}>Remind me later</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
});
