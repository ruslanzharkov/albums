import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class PostsScreen extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { textStyle, viewStyle } = styles;
        return (
            <View>
                <View style={viewStyle}>
                    <Text 
                        style={textStyle}
                    >
                        Albums
                    </Text>
                </View>
                {this.props.posts && this.props.posts.map((item, index) =>
                    <Text key={index}>{item.name}</Text>)
                }
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColow: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        paddingTop: 15,
        fontSize: 20
    }
};

export default PostsScreen;
