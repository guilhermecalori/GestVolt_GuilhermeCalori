import React, {useState} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Platform
} from'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function NovoProduto({ navigation }) {

    const handleVoltar = () => {
        navigation.navigate('Home');
    };

     
    return(

        <SafeAreaView>
            <KeyboardAvoidingView>
                <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                style={styles.ScrollView}
                >

                    <View>

                        <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.8}
                        accessibilityLabel="Voltar"
                        style={styles.btnVoltar}

                        >
                            <MaterialIcons name="arrow-back" size={22} color="#1d2b3e"/>
                            
                        </TouchableOpacity>

                        <View style = {styles.tituloContainer}>
                            <Text style = {styles.titulo}>Gestão de Estoque</Text>
                            <Text style = {styles.subTitulo}>Novo Produto</Text>
                        </View>

                        
                    </View>

                    <View style={styles.infoBanner}>
                        <MaterialIcons name="info-outline" size={20} color="#1d2b3e"/>
                        <Text style={styles.infoBannerText}>Preencha as informações técnicas para incluir um novo produto</Text>
                    </View>

                    <View style={styles.cardSessao}>

                        <View style={styles.cardSessaoHeader}>

                            <View style={[styles.cardSessaoIcon, { backgroundColor: "#eef2f6"}]}>
                                <MaterialIcons name="inventory" size={18} color="#1d2b3e"/>
                            </View>
                            
                        </View>

                        <View>
                            <Text style={styles.cardSessaoTitulo}> 1. Identificação Geral</Text>
                            <Text style={styles.cardSessaoSubtitulo}> 2. Dados principais do Produto</Text>
                        </View>

                        <CustomInput
                            label="Nome do Produto"
                            placeholder="Digite o nome do produto"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        
                        ></CustomInput>

                        <CustomInput
                            label="Categoria"
                            placeholder="Ex: Smartphone, Notebook, Tablet"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        
                        ></CustomInput>

                        <CustomInput
                            label="Fabricante / Marca"
                            placeholder="Sansung, Apple, LG"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        
                        ></CustomInput>

                        <CustomInput
                            label="Número do Lote"
                            placeholder="Ex: LOT-2026-X01"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        ></CustomInput>

                        <CustomInput
                            label="Descrição Detalhada"
                            placeholder="Descreva as principais características, modelo e finalidade..."
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                            multiline={true}
                            numberOfLines={3}
                        ></CustomInput>
                    </View>

                    <View style={styles.cardSessao}>

                        <View style={styles.cardSessaoHeader}>

                            <View style={[styles.cardSessaoIcon, { backgroundColor: "#eef2f6"}]}>
                                <MaterialIcons name="attach-money" size={18} color="#1d2b3e"/>
                            </View>
                            
                        </View>

                        <View>
                            <Text style={styles.cardSessaoTitulo}> 1. Valores e Controle de Estoque</Text>
                            <Text style={styles.cardSessaoSubtitulo}> 2. Precificação e limites de segurança</Text>
                        </View>

                        <CustomInput
                            label="Preço (R$)"
                            placeholder="0,00"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        
                        ></CustomInput>

                        <CustomInput
                            label="Estoque mínimo"
                            placeholder="Ex: 5"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        
                        ></CustomInput>

                        <CustomInput
                            label="Cor / Acabamento"
                            placeholder="Ex: Preto Espacial, Prata, Azul meia-noite"
                            value={""}
                            onChangeText={(text) => {}}
                            error={""}
                        
                        ></CustomInput>

                        
                    </View>
                    





                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    
tituloContainer: {
    flex: 1,
    marginHorizontal: 12,
},

titulo:{
    frontSize: 12,
    color: " #75777d",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
},

subTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1d2b3e",
    
},

infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f8f8",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    borderLeftColor: "#1d2b3e",
    gap:10,
},

infoBannerText: {
    fontSize: 12,
    color: "#44474c",
    flex: 1,
    lineHeight: 18,
},

cardSessao: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e3e5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,

},

cardSessaoHeader: {

    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    gap: 10,

},

cardSessaoIcon: {

    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",

},

cardSessaoTitulo: {

    fontSize: 15,
    fontWeight: "bold",
    color: "#1d2b3e",

},

cardSessaoSubtitulo: {

    fontSize: 11,
    color: "#75777d",
    marginTop: 1,

}



});