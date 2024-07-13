import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

interface MenuProps {
    onPress: () => void
}

export const Menu = ({ onPress }: MenuProps) => {
    return(
        <View style={styles.container}>
            <Button text="ACTIVE" onPress={onPress}/>
        </View>
    )
}
