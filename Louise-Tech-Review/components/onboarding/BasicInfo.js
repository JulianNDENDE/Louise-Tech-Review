import { View, TextInput, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { useUser } from '../../context/UserContext';
import theme from '../../theme';

export default function BasicInfo() {
  const { userData, setUserData } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="calendar" size={18} color={theme.colors.icon} style={{ marginLeft: 5 }} />
        <TextInput
          style={styles.input}
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
      <View style={styles.inputContainer}>
        <FontAwesome6 name="weight-scale" size={18} color={theme.colors.icon} style={{ marginLeft: 5 }} />
        <TextInput
          style={styles.input}
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
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="human-male-height-variant" size={18} color={theme.colors.icon} style={{ marginLeft: 5 }} />
        <TextInput
          style={styles.input}
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
      <View style={styles.inputContainer}>
        <Feather name="briefcase" size={18} color={theme.colors.icon} style={{ marginLeft: 5 }} />
        <TextInput
          style={styles.input}
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
  input: {
    flex: 1,
    color: theme.colors.text,
    marginLeft: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.inputBackground,
    padding: theme.spacing.inputPadding,
    borderRadius: theme.borderRadius,
    marginTop: theme.spacing.margin
  },
});
