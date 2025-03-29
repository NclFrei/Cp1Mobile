import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native"

export default function Header({ onLogoPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogoPress} style={styles.logoContainer}>
        <Image
          source={{ uri: "https://www.fiap.com.br/wp-content/themes/fiap2016/images/sharing/fiap.png" }}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.title}>Avaliação de Notas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 15,
  },
  logo: {
    width: 200,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ED145B", 
  },
})

