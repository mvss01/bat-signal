import React from "react"
import { Pressable, Text } from "react-native"
import { styles } from "./styles"

interface ButtonProps {
    onPress: () => void
    text: string
}

export const Button = ({onPress, text}: ButtonProps) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
