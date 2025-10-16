import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const EmployeeForm = () => {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleUpdate = () => {
        Alert.alert('Success', 'Update success!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Employee Information</Text>

            <TextInput
                placeholder="Full Name"
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
            />

            <TextInput
                placeholder="Age"
                keyboardType="numeric"
                style={styles.input}
                value={age}
                onChangeText={setAge}
            />

            <TextInput
                placeholder="Occupation"
                style={styles.input}
                value={occupation}
                onChangeText={setOccupation}
            />

            <Button title="Update" onPress={handleUpdate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, marginBottom: 15, fontWeight: 'bold' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default EmployeeForm;
