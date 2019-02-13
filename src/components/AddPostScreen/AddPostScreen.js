import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

class AddPostScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput/>
                    <TextInput/>
                </View>
            </View>
        );
    }

}

const styles = {

};

export default AddPostScreen;
