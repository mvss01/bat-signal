import React from "react"
import { View, Image } from "react-native"
import { styles } from "./styles"
import logo from "../../../assets/logo.png"

export const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo}/>
        </View>

    )
}
