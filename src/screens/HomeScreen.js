//Imports
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Platform,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {



    //logica
    const handleLougout = () => {
        const doLought = () => {
            navigation.replace('Login');
        }
    }

    const handleNovoProduto = () => {
        navigation.navigate('NovoProduto');
    };

    const handleListarTodosProdutos = () => {
        navigation.navegation('ListarTodosProdutos');
    };

    const handAlertaProdutos = () => {
        navigation.navegation('AlertaProdutos');
    }

    //estilo jsx(itens de tabela)
    return (

        <SafeAreaView style={styles.safeArea}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                <View style={styles.header}>
                    <Text style={styles.boasVindas}>Olá Admin</Text>
                    <Text style={styles.appName}>GestVolt</Text>

                    <TouchableOpacity
                        onPress={handleLougout}
                        style={styles.sair}
                        activeOpacity={0.7}
                        accessibilityLabel="sair do sistema">
                        <MaterialIcons name="logout" size={20} color="#ff0000" />

                    </TouchableOpacity>

                </View>

                <View style={styles.rowCards}>

                    <View style={styles.card}>
                        <View style={[styles.metricIconBg, { backgroundColor: '#e2e8f0' }]}>
                            <MaterialIcons name="inventory-2" size={22} color="1d2b3e" />

                        </View>
                        <Text style={styles.metricaValue}>20</Text>
                        <Text style={styles.metricaLabel}>Total de produtos</Text>

                    </View>

                    <View style={styles.card}>
                        <View style={[styles.metricIconBg, { backgroundColor: '#f6d4d4' }]}>
                            <MaterialIcons name="warning" size={22} color="#ba1a1a" />

                        </View>
                        <Text style={styles.metricaValue}>2</Text>
                        <Text style={styles.metricaLabel}>Estoque baixo</Text>

                    </View>

                    <View style={styles.card}>
                        <View style={[styles.metricIconBg, { backgroundColor: '#edfbec' }]}>
                            <MaterialIcons name="category" size={22} color="#22680d" />

                        </View>
                        <Text style={styles.metricaValue}>7</Text>
                        <Text style={styles.metricaLabel}>Categorias</Text>

                    </View>



                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>Ações rápidas:</Text>
                </View>

                <View style={styles.grid}>
                    <TouchableOpacity
                        onPress={handleNovoProduto}
                        style={[styles.cardAcao, styles.primaryCard]}
                        activeOpacity={0.8}
                    >

                        <View style={styles.materialAdd}>
                            <MaterialIcons name="add-circle" size={28} color="#ffffff" />
                        </View>

                        <View style={styles.containerTexto}>
                            <Text style={styles.titleNovoProduto}> Novo Produto </Text>
                            <Text style={styles.subtituloPlace}> Cadastrar um novo produto</Text>
                        </View>

                        <MaterialIcons name="chevron-right" size={22} color="#ffffff" />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleListarTodosProdutos}
                        style={[styles.cardAcao, styles.secundaryCard]}
                        activeOpacity={0.8}
                    >

                        <View style={styles.materialList}>
                            <MaterialIcons name="list" size={28} color="#000000" />
                        </View>

                        <View style={styles.containerTexto}>
                            <Text style={styles.titleListarProdutos}> Todos os Produtos </Text>
                            <Text style={styles.subtituloPlace}> Ver estoque completo</Text>
                        </View>

                        <MaterialIcons name="chevron-right" size={22} color="#ffffff" />
                        

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handAlertaProdutos}
                        style={[styles.cardAcao, styles.terciaryCard]}
                        activeOpacity={0.8}
                    >

                        <View style={styles.materialAlert}>
                            <MaterialIcons name="warning" size={28} color="#ff0000" />
                        </View>

                        <View style={styles.containerTexto}>
                            <Text style={styles.titleAlertaProdutos}> Produtos com Estoque Baixo </Text>
                            <Text style={styles.subtituloPlace}> Ver produtos com baixo estoque</Text>
                        </View>

                        <MaterialIcons name="chevron-right" size={22} color="#ffffff" />
                        
                    </TouchableOpacity>
                </View>





            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },

    boasVindas: {
        fontSize: 13,
        color: "#75777D",
        fontWeight: "500"
    },

    appName: {
        fontSize: 22,
        color: "#1d2b3e",
        fontWeight: "bold"
    },

    safeArea: {
        flex: 1,
        backgroundColor: "#f7f9fb",
    },

    scroll: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 36,

    },

    sair: {
        width: 40,
        height: 40,
        backgroundColor: '#ffdad6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffb4ab',
    },

    rowCards: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24,
        gap: 10,
    },

    card: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e0e3e5",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,

    },

    metricaValue: {
        fontSize: 18,
        color: "#1d2b3e",
        fontWeight: "bold",

    },

    metricaLabel: {
        fontSize: 12,
        color: "#75777D",
        marginTop: 2,
        textAlign: 'center',
    },

    title: {
        fontSize: 13,
        color: "#1d2b3e",
        fontWeight: "bold",

    },

    metricIconBg: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 6
    },

    cardAcao: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: '#e0e3e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },

    primaryCard: {
        backgroundColor: '#1d2b3e',
        borderColor: '#1d2b3e',
    },

    grid: {
        gap: 10,
        marginBottom: 26,
    },

    titleNovoProduto: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e1e3e6',
    },

    subtituloPlace: {
        fontSize: 12,
        color: '#75777d',
        marginTop: 1,
    },

    containerTexto: {
        flex: 1,

    },

    materialAdd: {
        width: 42,
        height: 42,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    secundaryCard: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
    },


    titleListarProdutos: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },

    materialList: {
        width: 42,
        height: 42,
        borderRadius: 10,
        backgroundColor: "rgba(52, 51, 51, 0.15)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    terciaryCard: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
    },

    titleAlertaProdutos: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },

    materialAlert: {
        width: 42,
        height: 42,
        borderRadius: 10,
        backgroundColor: "rgba(52, 51, 51, 0.15)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    }













});