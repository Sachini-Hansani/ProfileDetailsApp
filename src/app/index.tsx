import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints((previousPoints) => previousPoints + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#111111" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            style={styles.avatar}
          />
          <Text style={styles.checkMark}>✓</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.detailGroup}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Kevin De</Text>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>✉ kevin.d@nsbm.ac.lk</Text>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.label}>Points</Text>
          <Text style={styles.value}>★ {points}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={addPoint}
        activeOpacity={0.7}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#111111",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  avatarContainer: {
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 5,
    position: "relative",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
  checkMark: {
    position: "absolute",
    bottom: 4,
    right: -4,
    fontSize: 32,
    fontWeight: "bold",
    color: "#00CC22",
  },
  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginBottom: 15,
  },
  detailGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    color: "#333333",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "300",
  },
});
