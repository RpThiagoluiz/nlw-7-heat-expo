import React from "react";
import { Button } from "../../components/Button";
import { View } from "react-native";
import { useAuth } from "../../hooks";

import { styles } from "./styles";
import { COLORS } from "../../theme";

export function SignInBox() {
  const { singIn, isSingIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        onPress={singIn}
        title="Entrar com o GITHUB"
        icon="github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        isLoading={isSingIn}
      />
    </View>
  );
}
