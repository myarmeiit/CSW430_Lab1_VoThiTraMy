import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LAB 1 - Question 6</Text>

            <Button title="Q1: Employee Information" onPress={() => navigation.navigate('EmployeeForm')} />
            <View style={styles.space} />

            <Button title="Q2: Sum of First and Last Digit" onPress={() => navigation.navigate('SumFirstLast')} />
            <View style={styles.space} />

            <Button title="Q3: Minimum of Three Numbers" onPress={() => navigation.navigate('MinOfThree')} />
            <View style={styles.space} />

            <Button title="Q4: Hailstone Sequence" onPress={() => navigation.navigate('Hailstone')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
    space: { height: 15 },
});

export default HomeScreen;
