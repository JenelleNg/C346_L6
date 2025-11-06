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

const QuizQuestion = ({ picture, question, options, selectedValue, onValueChange, onTextChange }) => {
    return (
        <View style={{ marginTop: 10, marginBottom: 20 }}>
            <Image source={{ uri: picture }} style={{ width: 415, height: 400 }} />
            <Text>{question}</Text>

            {options ? (
                <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
                    {options.map((opt, index) => (
                        <Picker.Item key={index} label={opt} value={opt} />
                    ))}
                </Picker>
            ) : (
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder="Type your answer"
                    onChangeText={onTextChange}
                />
            )}
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
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome6 name="leaf" size={30} color="green" style={{ transform: [{ scaleX: -1 }] }} />
                <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", color: "green", marginHorizontal: 10 }}>
                    Guess the bird
                </Text>
                <FontAwesome6 name="leaf" size={30} color="green" />
            </View>

            {/* Multiple-choice questions */}
            <QuizQuestion
                picture="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/636107892/1200"
                question="What animal is this?"
                options={['Stork', 'Eagle', 'Parrot']}
                selectedValue={eagle}
                onValueChange={setEagle}
            />
            <QuizQuestion
                picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUgVyutXUrS3aoWOPaU839jCmp4jhGAlwQQ&s"
                question="What animal is this?"
                options={['Blue Jay', 'Sparrow', 'Kingfisher']}
                selectedValue={kingfisher}
                onValueChange={setKingfisher}
            />
            <QuizQuestion
                picture="https://cdn.britannica.com/09/93109-050-77B81B1A/European-robin-redbreast.jpg"
                question="What animal is this?"
                options={['Goldfinch', 'Quail', 'Robin']}
                selectedValue={robin}
                onValueChange={setRobin}
            />

            {/* Open-ended questions */}
            <QuizQuestion
                picture="https://images.birdfact.com/production/king-penguin.jpg?w=1800&h=1350&q=80&auto=format&fit=crop&dm=1729722198&s=404aec5b9792a7aceab85a0f30a3490e"
                question="What animal is this?"
                onTextChange={setPen}
            />
            <QuizQuestion
                picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeT053mdMFpmUh5t9m8jIkVKB5Jo9QOuEAA&s"
                question="What animal is this?"
                onTextChange={setHawk}
            />
            <QuizQuestion
                picture="https://www.natureswaybirds.com/cdn/shop/articles/pileated_woodpecker_750x.png?v=1713204848"
                question="What animal is this?"
                onTextChange={setWood}
            />

            <Button title="Submit Answers" onPress={checkAnswers} color="blue" />
        </ScrollView>
    );
};

export default MyApp;
