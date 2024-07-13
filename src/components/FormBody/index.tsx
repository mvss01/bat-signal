import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

interface FormBodyProps {
    onPress: () => void
}

export const FormBody = ({ onPress }: FormBodyProps) => {
    const [text, setText] = useState("")
    const [error, setError] = useState(false)
    const validate = () => {
        if(text){
            setText("")
            setError(false)
            onPress()
        }else{
            setError(true)
        }
    }

    const resetInput = (event: string) =>{
        setError(false)
        setText(event)
    }

    return (
        <View style={styles.container}>
            <Input label="Where are you?" placeholder="Type here..." multiline={false} required={true} onChangeText={(event) => resetInput(event)} error={error} value={text}/>
            <Input label="What is happening?" placeholder="Type here..." multiline={true} numberOfLines={4} required={false}/>
            <Input label="You are hurt? If yes, please indicate the level of severity." placeholder="Type here..." multiline={true} numberOfLines={4} required={false}/>
            <View style={styles.wrapperView}>
                <Button text="SEND" onPress={validate}/>
            </View>
        </View>
    )
}
