import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

class AddPostScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            content: '',
            emptyTitle: false,
            emptyAuthor: false,
            emptyContent: false,
        };
    }

    addPost = () => {
        const title = this.state.title;
        const author = this.state.author;
        const content = this.state.content;

        if (!title) {
            this.setState({ emptyTitle: true });
            return;
        }

        if (!author) {
            this.setState({ emptyAuthor: true });
            return;
        }

        if (!content || content.length < 50) {
            this.setState({ emptyContent: true });
            return;
        }



        const date = new Date();
        const postNumber = this.props.posts.length + 1;
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        this.props.addNewPost({ title, author, content, formattedDate, postNumber });
    };

    titleChangeHandler = (title) => {
        this.setState({ title, emptyTitle: false });
    };

    authorChangeHandler = (author) => {
        this.setState({ author });
    };

    contentChangeHandler = (content) => {
        this.setState({ content });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleInputContainer}>
                    <Text>Post title</Text>
                    <TextInput
                        style={[styles.titleInput, this.state.emptyTitle ? styles.errorTitleInput : null]}
                        onChangeText={this.titleChangeHandler}
                    />
                </View>

                <View style={styles.titleInputContainer}>
                    <Text>Post author</Text>
                    <TextInput
                        style={[styles.titleInput, this.state.emptyTitle ? styles.errorTitleInput : null]}
                        onChangeText={this.authorChangeHandler}
                    />
                </View>

                <View style={styles.titleInputContainer}>
                    <Text>Content of post</Text>
                    <TextInput
                        style={[styles.contentInput, this.state.emptyContent ? styles.errorTitleInput : null]}
                        editable={true}
                        maxLength={4000}
                        multiline={true}
                        numberOfLines={14}
                        onChangeText={this.contentChangeHandler}
                    />

                    <Button
                        title={'Add Post'}
                        onPress={this.addPost}
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
    errorTitleInput: {
        borderColor: '#f23a3a',
        borderWidth: 1,
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
