import { View, TextInput, StyleSheet, Image } from 'react-native';
import { useUser } from '../../context/UserContext';
import theme from '../../theme';

export default function BasicInfo() {
  const { userData, setUserData } = useUser();

  return (
    <View style={styles.container}>
      <View style={[theme.inputContainer, { marginTop: 0 }]}>
        <Image
          source={require('../../assets/icons/input/Calendar.png')}
          style={styles.icon}
        />
        <TextInput
          style={theme.input}
          placeholder="How old are you?"
          placeholderTextColor={theme.colors.placeholder}
          keyboardType="numeric"
          value={userData.basicInfo.age ? userData.basicInfo.age.toString() : undefined}
          onChangeText={text => setUserData(prev => ({
            ...prev,
            basicInfo: { ...prev.basicInfo, age: text ? Number(text) : null }
          }))}
        />
      </View>

      <View style={theme.inputContainer}>
        <Image
          source={require('../../assets/icons/input/Weigh.png')}
          style={styles.icon}
        />
        <TextInput
          style={theme.input}
          placeholder="How much do you weigh? (kg)"
          placeholderTextColor={theme.colors.placeholder}
          keyboardType="numeric"
          value={userData.basicInfo.weight ? userData.basicInfo.weight.toString() : undefined}
          onChangeText={text => setUserData(prev => ({
            ...prev,
            basicInfo: { ...prev.basicInfo, weight: text ? Number(text) : null }
          }))}
        />
      </View>

      <View style={theme.inputContainer}>
        <Image
          source={require('../../assets/icons/input/Height.png')}
          style={styles.icon}
        />
        <TextInput
          style={theme.input}
          placeholder="How tall are you? (cm)"
          placeholderTextColor={theme.colors.placeholder}
          keyboardType="numeric"
          value={userData.basicInfo.height ? userData.basicInfo.height.toString() : undefined}
          onChangeText={text => setUserData(prev => ({
            ...prev,
            basicInfo: { ...prev.basicInfo, height: text ? Number(text) : null }
          }))}
        />
      </View>

      <View style={theme.inputContainer}>
        <Image
          source={require('../../assets/icons/input/Job.png')}
          style={styles.icon}
        />
        <TextInput
          style={theme.input}
          placeholder="What is your job?"
          placeholderTextColor={theme.colors.placeholder}
          value={userData.basicInfo.job || undefined}
          onChangeText={text => setUserData(prev => ({
            ...prev,
            basicInfo: { ...prev.basicInfo, job: text }
          }))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    padding: theme.spacing.containerPadding,
    borderRadius: theme.borderRadius,
    marginBottom: theme.spacing.margin
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 8,
  },
});
