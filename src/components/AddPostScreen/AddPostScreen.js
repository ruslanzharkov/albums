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


                <TextInput
                    style={styles.contentInput}
                    editable={true}
                    maxLength={1000}
                    multiline={true}
                    numberOfLines={14}
                />

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
        borderColor: '#ededee',
        borderWidth: 1,
        borderRadius: 10,
    },
    contentInput: {
        height: 300,
        borderColor: '#ededee',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20
    }
};

export default AddPostScreen;
