import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../commonComponent/Input';
import Button from '../commonComponent/Button';

class AddPostComponent extends Component {
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
        const { title, author, content } = this.state;

        if (this.emptyChecker(title, author, content)) {
            return;
        }

        const date = new Date();
        const postNumber = this.props.posts.length + 1;
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        this.props.addNewPost({ title, author, content, formattedDate, postNumber });
    };

    emptyChecker = (title, author, content) => {

        if (!title) {
            this.setState({ emptyTitle: true });
            return true;
        }

        if (!author) {
            this.setState({ emptyAuthor: true });
            return true;
        }

        if (!content || content.length < 50) {
            this.setState({ emptyContent: true });
            return true;
        }
    };

    titleChangeHandler = (title) => {
        this.setState({ title, emptyTitle: false });
    };

    authorChangeHandler = (author) => {
        this.setState({ author, emptyAuthor: false });
    };

    contentChangeHandler = (content) => {
        this.setState({ content, emptyContent: false });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleInputContainer}>
                     <Input
                        style={[styles.input,
                            this.state.emptyTitle ? styles.errorTitleInput : null
                        ]}
                        placeholder={'Title'}
                        onChangeText={this.titleChangeHandler}
                     />
                </View>

                <View style={styles.titleInputContainer}>
                    <Input
                        style={[styles.input,
                            this.state.emptyAuthor ? styles.errorTitleInput : null
                        ]}
                        placeholder={'Author'}
                        onChangeText={this.authorChangeHandler}
                    />
                </View>

                <View style={styles.titleInputContainer}>
                    <Input
                        style={[styles.contentInput,
                            this.state.emptyContent ? styles.errorTitleInput : null
                        ]}
                        placeholder={'Content'}
                        editable
                        maxLength={4000}
                        multiline
                        numberOfLines={14}
                        onChangeText={this.contentChangeHandler}
                    />

                    {
                        this.props.isLoading ?
                            <ActivityIndicator size="large" color="#0000ff" />
                            :
                            <Button
                                icon={<Ionicons name={'ios-add'} size={25} color={'#fff'} />}
                                title={'Add new post'}
                                onPress={this.addPost}
                            />
                    }
                </View>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    titleInputContainer: {
        marginTop: 10,
    },
    errorTitleInput: {
        borderColor: '#f23a3a',
        borderWidth: 0.5,
    },
    input: {
        width: 300,
        height: 30,
        paddingLeft: 8,
        paddingRight: 8,
        borderWidth: 0.5,
        borderColor: '#757575',
        borderRadius: 5,
    },
    contentInput: {
        paddingLeft: 8,
        borderColor: '#757575',
        paddingRight: 8,
        width: 300,
        height: 300,
        borderWidth: 0.5,
        borderRadius: 5,
    }
};

export default AddPostComponent;
