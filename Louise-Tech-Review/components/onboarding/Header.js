import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, routeName }) => {
  const navigation = useNavigation();
  const isObjectivesScreen = routeName === "objectives";
  const isCompletionScreen = routeName === "completion";

  return (
    <View style={styles.container}>
      {!isObjectivesScreen && !isCompletionScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, isObjectivesScreen || isCompletionScreen && { marginLeft: 0 }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 30,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    flex: 1,
    marginLeft: -24,
  },
});

export default Header;
