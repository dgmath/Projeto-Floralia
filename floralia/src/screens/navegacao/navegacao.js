import { View, Button } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />
            <Button
<<<<<<< HEAD
=======
                title="Favoritos"
                onPress={() => navigation.navigate("Favoritos")}
            />
            <Button
                title="Carrinho"
                onPress={() => navigation.navigate("Carrinho")}
            />
             <Button
>>>>>>> origin/cat
                title="RecuperarSenha"
                onPress={() => navigation.navigate("recuperarSenha")}
            />
           
        </View>
    )
}