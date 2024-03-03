import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';

type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default function TabTwoScreen() {
  const { data: users, isLoading, error } = useQuery<User[]>({ 
    queryKey: ['users'], 
    queryFn: fetchUsers 
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>

      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}

      {users && (
        <FlatList 
          data={users}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemName}>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  list: {
    width: '100%',
  },
  listItem: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    width: '100%',
  },
  listItemName: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
