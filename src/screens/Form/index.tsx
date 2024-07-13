import React from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { FormHeader } from "../../components/FormHeader"
import { FormBody } from "../../components/FormBody"

interface FormProps {
    screen: string
    setScreen: (screen: string) => void
}

export const Form = ({ screen, setScreen  }: FormProps) => {
    return(
        <View style={screen == "Form" ? styles.container : {display: "none"}}>
            <FormHeader onPress={() => setScreen("Home")}/>
            <FormBody onPress={() => setScreen("Home")} />
        </View>
    )
}
