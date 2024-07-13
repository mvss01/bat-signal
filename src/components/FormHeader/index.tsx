import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

interface FormHeaderProps {
    onPress: () => void
}

export const FormHeader = ({ onPress }: FormHeaderProps) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <MaterialIcons name="arrow-back-ios" size={30} color="#030405" />
                <Text style={styles.text}>Description</Text>
            </Pressable>
        </View>
    )
}
