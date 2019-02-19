import React, {PureComponent} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

class PostItem extends PureComponent {

    goDetailsScreen = (postDetailInfo) => {
        if (this.props.onPress)
            this.props.onPress(postDetailInfo);
    };

    render() {
        return (
            <View style={styles.postContainer}>
                <TouchableOpacity
                    style={styles.innerPostContainer}
                    onPress={() => this.goDetailsScreen(this.props.post)}
                >
                    <View>
                        <Text style={styles.author}>
                            {this.props.post.title}
                        </Text>
                    </View>

                    <View style={styles.aboutContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleContent}>
                                Author:
                            </Text>
                            <Text>
                                {this.props.post.author}
                            </Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleContent}>
                                Date:
                            </Text>
                            <Text>
                                {'10/01/19'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.separateLine}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PostItem;

const styles = {
    postContainer: {
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
    },
    innerPostContainer: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    aboutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    titleContainer: {
        flexDirection: 'row',
    },
    titleContent: {
        color: '#ada6a6',
        marginRight: 4
    },
    separateLine: {
        height: 1,
        backgroundColor: '#ededee'
    },
    author: {
        fontSize: 17
    }
};
