import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

class AddPostScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            content: ''
        };
    }

    addPost = () => {
        let title = this.state.title;
        let author = this.state.author;
        let content = this.state.content;
        if (title && author && content) {

        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleInputContainer}>
                    <Text>Post title</Text>
                    <TextInput
                        style={styles.titleInput}
                        placeholder={'Title of post'}
                    />
                </View>

                <View style={styles.titleInputContainer}>
                    <Text>Post author</Text>
                    <TextInput
                        style={styles.titleInput}
                    />
                </View>

                <View style={styles.titleInputContainer}>
                    <Text>Content of post</Text>
                    <TextInput
                        style={styles.contentInput}
                        editable={true}
                        maxLength={1000}
                        multiline={true}
                        numberOfLines={14}
                    />

                    <Button title={'Add Post'} onPress={this.addPost}/>

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
        paddingLeft: 8,
        paddingRight: 8,
        height: 40,
        borderColor: '#757575',
        borderWidth: 1,
        borderRadius: 10,
    },
    contentInput: {
        paddingLeft: 8,
        paddingRight: 8,
        height: 300,
        borderColor: '#757575',
        borderWidth: 1,
        borderRadius: 10,
    }
};

export default AddPostScreen;
