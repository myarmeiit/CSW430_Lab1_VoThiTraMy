
import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const SumFirstLast = () => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const numStr = number.toString();
        const first = parseInt(numStr[0]);
        const last = parseInt(numStr[numStr.length - 1]);
        setResult(first + last);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter a number"
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
            />
            <Button title="Calculate" onPress={handleCalculate} />
            {result !== null && <Text style={styles.result}>Result: {result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    result: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
});

export default SumFirstLast;
