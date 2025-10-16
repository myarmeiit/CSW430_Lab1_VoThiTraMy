import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MinOfThree = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [min, setMin] = useState(null);

    const findMin = () => {
        const minValue = Math.min(Number(a), Number(b), Number(c));
        setMin(minValue);
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter number 1" style={styles.input} keyboardType="numeric" value={a} onChangeText={setA} />
            <TextInput placeholder="Enter number 2" style={styles.input} keyboardType="numeric" value={b} onChangeText={setB} />
            <TextInput placeholder="Enter number 3" style={styles.input} keyboardType="numeric" value={c} onChangeText={setC} />
            <Button title="Find Minimum" onPress={findMin} />
            {min !== null && <Text style={styles.result}>Minimum: {min}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    result: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
});

export default MinOfThree;
