import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Score extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.score}>{this.props.score}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    score: {
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center",
    },
});
