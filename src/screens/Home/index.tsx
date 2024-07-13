import React from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { HomeHeader } from "../../components/HomeHeader";
import { Menu } from "../../components/Menu";

interface HomeProps {
    screen: string
    setScreen: (screen: string) => void
}

export const Home = ({ screen, setScreen  }: HomeProps) =>{
    return(
        <View style={screen == "Home" ? styles.container : { display: "none" }}>
            <HomeHeader/>
            <Menu onPress={() => setScreen("Form")}/>
        </View>
    )
}
