import React from "react";
import { Button } from "../../components/Button";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../theme";

export function SignInBox() {
  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o GITHUB"
        icon="github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
      />
    </View>
  );
}
