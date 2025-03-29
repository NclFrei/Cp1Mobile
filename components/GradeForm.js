import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import { validateInput } from "../utils/inputValidation"

export default function GradeForm({
  nota1,
  setNota1,
  nota2,
  setNota2,
  nota3,
  setNota3,
  faltas,
  setFaltas,
  onValidate,
}) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nota 1:</Text>
        <TextInput
          style={styles.input}
          value={nota1}
          onChangeText={(text) => validateInput(text, setNota1)}
          keyboardType="decimal-pad"
          placeholder="0.00"
          maxLength={5} 
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nota 2:</Text>
        <TextInput
          style={styles.input}
          value={nota2}
          onChangeText={(text) => validateInput(text, setNota2)}
          keyboardType="decimal-pad"
          placeholder="0.00"
          maxLength={5}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nota 3:</Text>
        <TextInput
          style={styles.input}
          value={nota3}
          onChangeText={(text) => validateInput(text, setNota3)}
          keyboardType="decimal-pad"
          placeholder="0.00"
          maxLength={5}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Faltas:</Text>
        <TextInput
          style={styles.input}
          value={faltas}
          onChangeText={(text) => {
            if (/^\d*$/.test(text) || text === "") {
              setFaltas(text)
            }
          }}
          keyboardType="number-pad"
          placeholder="0"
          maxLength={2}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onValidate}>
        <Text style={styles.buttonText}>Validar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ED145B", 
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})

