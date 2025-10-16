import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Hailstone = () => {
    const [n, setN] = useState('');
    const [sequence, setSequence] = useState([]);

    const generateSequence = () => {
        let num = parseInt(n);
        if (num <= 0 || isNaN(num)) {
            setSequence(['Please enter a positive number']);
            return;
        }

        let seq = [num];
        while (num !== 1) {
            if (num % 2 === 0) num = num / 2;
            else num = num * 3 + 1;
            seq.push(num);
        }
        setSequence(seq);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter n > 0"
                style={styles.input}
                keyboardType="numeric"
                value={n}
                onChangeText={setN}
            />
            <Button title="Generate" onPress={generateSequence} />
            {sequence.length > 0 && (
                <Text style={styles.result}>Sequence: {sequence.join(', ')}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    result: { marginTop: 10, fontSize: 16 },
});

export default Hailstone;
