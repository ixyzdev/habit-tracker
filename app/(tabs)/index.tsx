// import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* <Link href="/login" style={styles.nvButton}>
        Go to Login page
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // nvButton: {
  //   marginTop: 20,
  //   padding: 10,
  //   backgroundColor: "#007AFF",
  //   borderRadius: 5,
  // },
});
