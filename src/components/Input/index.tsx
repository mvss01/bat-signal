import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

interface InputProps {
    onChangeText?: (text: string) => void
    value?: string
    error?: boolean
    label: string,
    placeholder: string
    multiline: boolean
    numberOfLines?: number
    required: boolean
}

export const Input = ({label, placeholder, multiline, numberOfLines, required, onChangeText, error, value}: InputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {label}
                {required ? <Text style={[styles.text, { color: "red"}]}> *</Text> : ""}
            </Text>
            <TextInput style={[styles.input, {textAlignVertical: multiline ? 'top': 'center', borderColor: error ? "red": "transparent" }]} placeholder={placeholder} placeholderTextColor="#ffffff7f" selectionColor={"#FFFFFF"} multiline={multiline} numberOfLines={numberOfLines} value={value} onChangeText={onChangeText}/>
        </View>
    )
}
