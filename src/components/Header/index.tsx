import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { UserImage } from "../UserImage";
import LogoSvg from "../../assets/logo.svg";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        {/* Se liga que se nao passar a imagem ele pega pelo default, olha como q ele fez. */}
        <UserImage imageUri="https://github.com/RpThiagoluiz.png" />
      </View>
    </View>
  );
}
