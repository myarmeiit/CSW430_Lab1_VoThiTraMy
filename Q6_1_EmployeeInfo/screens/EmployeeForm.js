import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const EmployeeDetail = ({ fullName, age, occupation }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Full Name: {fullName}</Text>
            <Text style={styles.text}>Age: {age}</Text>
            <Text style={styles.text}>Occupation: {occupation}</Text>
        </View>
    );
};

const EmployeeInfo = () => {
    const employee = {
        fullName: 'Vo Thi Tra My',
        age: 24,
        occupation: 'Student',
    };

    const handleUpdate = () => {
        Alert.alert('Success', 'Update success!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Employee Information</Text>

            <EmployeeDetail
                fullName={employee.fullName}
                age={employee.age}
                occupation={employee.occupation}
            />

            <Button title="Update" onPress={handleUpdate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, marginBottom: 15, fontWeight: 'bold' },
    box: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    text: { fontSize: 16, marginBottom: 5 },
});

export default EmployeeInfo;
