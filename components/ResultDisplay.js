import { StyleSheet, View, Text } from "react-native"

export default function ResultDisplay({ resultado }) {
  return (
    <View style={styles.resultContainer}>
      <Text style={[styles.resultText, resultado.includes("Aprovado") ? styles.approved : styles.failed]}>
        {resultado}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  approved: {
    color: "green",
  },
  failed: {
    color: "red",
  },
})

