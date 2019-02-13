import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

class AddPostScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleInputContainer}>
                    <TextInput
                        style={styles.titleInput}
                    />
                </View>
            </View>
        );
    }

}

const styles = {
    container: {
        marginHorizontal: 10
    },
    titleInputContainer: {
        marginTop: 10,
    },
    titleInput: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
    }
};

export default AddPostScreen;
