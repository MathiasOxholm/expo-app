import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novicell Expo Demo</Text>
      <Text style={styles.subtitle}>A quick demo app built in Expo / React native. That features tabs, modal and some data fetching.</Text>
      <TouchableOpacity style={styles.button}> 
        <Text>This is a button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 8,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.dark.tint,
    borderRadius: 5,
    marginBottom: 20
  }
});
