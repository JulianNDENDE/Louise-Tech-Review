import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';
import theme from '../../theme';

export default function MedicationAllergy({ index, allergy, onRemove, onChange }) {
  return (
    <View style={styles.container} key={allergy.id}>
      <View style={styles.header}>
        {/* render with index or id */}
        <Text style={styles.label}>Medication Allergy {index + 1}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          <Feather name="trash" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={theme.inputContainer}>
        <Fontisto name="pills" size={18} color="#bbb" style={{ marginLeft: 5 }} />
        <TextInput 
          style={theme.input} 
          placeholder="Medication name or chemical" 
          placeholderTextColor="#bbb" 
          value={allergy.name}
          onChangeText={(text) => onChange(allergy.id, "name", text)} 
        />
      </View>

      <View style={theme.inputContainer}>
        <Feather name="message-circle" size={18} color="#bbb" style={{ marginLeft: 5 }} />
        <TextInput 
          style={theme.input} 
          placeholder="Additional comment (optional)" 
          placeholderTextColor="#bbb" 
          value={allergy.comment}
          onChangeText={(text) => onChange(allergy.id, "comment", text)} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: theme.spacing.padding, backgroundColor: theme.colors.secondaryBackground, borderRadius: theme.borderRadius, marginBottom: theme.spacing.verticalMargin },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  label: { fontSize: 16, color: theme.colors.text },
  removeButton: { padding: 5, backgroundColor: '#FF4444', borderRadius: 5 },
});
