"use client"

import { useState } from "react"
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native"
import Header from "../components/Header"
import GradeForm from "../components/GradeForm"
import ResultDisplay from "../components/ResultDisplay"
import { validateGrades } from "../utils/gradeCalculator"


export default function MainScreen() {
  const [NfNota1, setNfNota1] = useState("")
  const [NfNota2, setNfNota2] = useState("")
  const [NfNota3, setNfNota3] = useState("")
  const [NfFaltas, setNfFaltas] = useState("")
  const [NfResultado, setNfResultado] = useState("")

  const NfValidarAluno = () => {
    const result = validateGrades(NfNota1, NfNota2, NfNota3, NfFaltas)
    setNfResultado(result)
  }

  const NfResetarCampos = () => {
    setNfNota1("")
    setNfNota2("")
    setNfNota3("")
    setNfFaltas("")
    setNfResultado("")
    Keyboard.dismiss()
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Header onLogoPress={NfResetarCampos} />

            <GradeForm
              nota1={NfNota1}
              setNota1={setNfNota1}
              nota2={NfNota2}
              setNota2={setNfNota2}
              nota3={NfNota3}
              setNota3={setNfNota3}
              faltas={NfFaltas}
              setFaltas={setNfFaltas}
              onValidate={NfValidarAluno}
            />

            {NfResultado ? <ResultDisplay resultado={NfResultado} /> : null}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
})

