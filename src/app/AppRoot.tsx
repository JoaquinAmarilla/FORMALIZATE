import { StatusBar, StyleSheet, Text, View } from "react-native";

import { colors } from "../theme";

export function AppRoot() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Formalizate</Text>
      <Text style={styles.subtitle}>Base técnica inicial</Text>
      <Text style={styles.description}>
        La aplicación está en preparación. Esta pantalla confirma la estructura
        inicial del proyecto; todavía no contiene funcionalidades de producto.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.8,
  },
  subtitle: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    maxWidth: 340,
    marginTop: 16,
    color: colors.mutedText,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
});
