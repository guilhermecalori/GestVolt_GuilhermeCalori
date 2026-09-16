import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,   
    StyleSheet,
    Alert,
    Platform,
    ScrollView // Adicionado import que faltava
} from 'react-native';
//import { ScrollView } from 'react-native-web';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        setError("");

        if (email.trim() === "") {
            setError("Por favor, digite seu email");
            return;
        }

        if (password.trim() === "") {
            setError("Por favor, digite sua senha");
            return;
        }

        if (Platform.OS === "web") {
            alert("Login efetuado com sucesso!");
        } else {
            Alert.alert("Sucesso", "Login efetuado com sucesso!");
        }

        if (navigation) {
            navigation.replace("Home");
        }
    }; // Fechamento correto do handleLogin

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
        >
            {/* Cabecalho */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <MaterialIcons name="archive" size={48} color="#9400D3" />
                </View>
                <Text style={styles.logoText}>GestVolt</Text>
                <Text style={styles.subtitulo}>Bem-vindo (a)!</Text>
            </View>

            {/* Formulário de login */}
            <View style={styles.card}>
                {/*Mensagem de erro */}
                {error !== "" && (
                    <View style={styles.errorBox}>
                        <MaterialIcons name="error-outline" size={18} color="red" />
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )}

                {/*Email */}
                <CustomInput
                    label=" Email"
                    iconName="email"
                    placeholder="Digite seu email aqui: abc@abc.com"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        if(error) setError("");
                    }}
                    keyboardType="email-address"
                    
                />

                {/*Senha */}
                <CustomInput
                    label=" Senha"
                    iconName="lock"
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        if(error) setError("");
                    }}
                    secureTextEntry={true}
                />

                {/*Botão de entrar */}
                <CustomButton
                    title="Entrar"
                    onPress={handleLogin}
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    header: {
        alignItems: "center",
        marginBottom: 28
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 12,
        backgroundColor: "#e0e3e5",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },
    logoText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1d2b3e",
        letterSpacing: -0.5,
    },
    subtitulo: {
        fontSize: 16,
        color: "#1d2b3e",
        marginTop: 4
    },
});