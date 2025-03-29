import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import theme from '../../theme';

const EndometriosisOptions = ({ options, selected, setSelected, setUserData }) => {
  return (
    <View>
      <View style={styles.optionRow}>
        {options.slice(0, 2).map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.option, selected === option.text && styles.selected]}
            onPress={() => {
              setSelected(option.text);
              setUserData(prevData => ({
                ...prevData,
                endometriosis: { diagnosis: option.diagnosis, text: option.text }
              }));
            }}
          >
            <Image source={option.image} style={styles.image} />
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.optionRow, styles.singleOptionRow]}>
        {options.slice(2).map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.option, selected === option.text && styles.selected, styles.largerOption]}
            onPress={() => {
              setSelected(option.text);
              setUserData(prevData => ({
                ...prevData,
                endometriosis: { diagnosis: option.diagnosis, text: option.text }
              }));
            }}
          >
            <Image source={option.image} style={[styles.image, styles.image]} />
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  singleOptionRow: {
    justifyContent: 'center',
  },
  option: {
    alignItems: 'center',
    padding: theme.spacing.padding,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius,
    borderColor: theme.colors.border,
    borderWidth: 2,
    width: '48%',
  },
  selected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.borderSelected,
    borderWidth: 2,
  },
  optionText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  largerOption: {
    width: '100%',
  },
});

export default EndometriosisOptions;
