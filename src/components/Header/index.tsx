import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { UserImage } from "../UserImage";
import LogoSvg from "../../assets/logo.svg";
import { styles } from "./styles";
import { useAuth } from "../../hooks";

export function Header() {
  const { user, singOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        {user && (
          <TouchableOpacity onPress={singOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}
        {/* Se liga que se nao passar a imagem ele pega pelo default, olha como q ele fez. */}
        <UserImage imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
