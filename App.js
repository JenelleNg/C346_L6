import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const InputBox = ({ label, onChangeText }) => {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text>{label}</Text>
            <TextInput style={{ borderWidth: 1, padding: 5 }} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    const [eagle, setEagle] = useState('');
    const [kingfisher, setKingfisher] = useState('');
    const [robin, setRobin] = useState('');

    const [penguin, setPen] = useState('');
    const [hawk, setHawk] = useState('');
    const [woodpecker, setWood] = useState('');

    const checkAnswers = () => {
        let result = 0;

        if (eagle === 'Eagle') result += 1;
        if (kingfisher === 'Kingfisher') result += 1;
        if (robin === 'Robin') result += 1;

        if (penguin.toLowerCase().includes('penguin')) result += 1;
        if (hawk.toLowerCase().includes('hawk')) result += 1;
        if (woodpecker.toLowerCase().includes('woodpecker')) result += 1;

        const message = result > 3 ? "Well done!" : "You can do better next time.";

        Alert.alert("You got " + result + " correct answers.\n" + message);
    };

    return (
        <ScrollView style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", color:"green" }}>
                <FontAwesome6 name="leaf" size={30} color="green" invert />
                 Guess the bird <FontAwesome6 name="leaf" size={30} color="green" /></Text>

            {/* Eagle */}
            <Image
                source={{ uri: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/636107892/1200' }}
                style={{ width: 415, height: 400 }}
            />
            <Text>What animal is this?</Text>
            <Picker selectedValue={eagle} onValueChange={(value) => setEagle(value)}>
                <Picker.Item label='Stork' value='Stork' />
                <Picker.Item label='Eagle' value='Eagle' />
                <Picker.Item label='Parrot' value='Parrot' />
            </Picker>

            {/* Kingfisher */}
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUgVyutXUrS3aoWOPaU839jCmp4jhGAlwQQ&s' }}
                style={{ width: 415, height: 400 }}
            />
            <Text>What animal is this?</Text>
            <Picker selectedValue={kingfisher} onValueChange={(value) => setKingfisher(value)}>
                <Picker.Item label='Blue Jay' value='Blue Jay' />
                <Picker.Item label='Sparrow' value='Sparrow' />
                <Picker.Item label='Kingfisher' value='Kingfisher' />
            </Picker>

            {/* Robin */}
            <Image
                source={{ uri: 'https://cdn.britannica.com/09/93109-050-77B81B1A/European-robin-redbreast.jpg' }}
                style={{ width: 415, height: 400 }}
            />
            <Text>What animal is this?</Text>
            <Picker selectedValue={robin} onValueChange={(value) => setRobin(value)}>
                <Picker.Item label='Goldfinch' value='Goldfinch' />
                <Picker.Item label='Quail' value='Quail' />
                <Picker.Item label='Robin' value='Robin' />
            </Picker>

            {/* Penguin */}
            <Image
                source={{ uri: 'https://images.birdfact.com/production/king-penguin.jpg?w=1800&h=1350&q=80&auto=format&fit=crop&dm=1729722198&s=404aec5b9792a7aceab85a0f30a3490e' }}
                style={{ width: 415, height: 400 }}
            />
            <InputBox label='What animal is this?' onChangeText={setPen} />

            {/* Hawk */}
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeT053mdMFpmUh5t9m8jIkVKB5Jo9QOuEAA&s' }}
                style={{ width: 415, height: 400 }}
            />
            <InputBox label='What animal is this?' onChangeText={setHawk} />

            {/* Woodpecker */}
            <Image
                source={{ uri: 'https://www.natureswaybirds.com/cdn/shop/articles/pileated_woodpecker_750x.png?v=1713204848' }}
                style={{ width: 415, height: 400 }}
            />
            <InputBox label='What animal is this?' onChangeText={setWood} />


            <Button title='Submit Answers' onPress={checkAnswers} color='blue' />
        </ScrollView>
    );
};

export default MyApp;
