import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Text, Animated, PanResponder, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class Post extends PureComponent {

    constructor(props) {
        super(props);

        this.gestureDelay = -35;
        this.scrollViewEnabled = true;

        const position = new Animated.ValueXY();
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                this.disableTouch();
                return false;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                if (
                    (gestureState.dx < 2 && gestureState.dx > -2)
                    && (gestureState.dy < 2 && gestureState.dy > -2)
                ) {
                    return false;
                }

                return true;
            },
            onPanResponderTerminationRequest: (evt, gestureState) => {
                this.enableTouch();
                return false;
            },
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 35) {
                    this.setScrollViewEnabled(false);
                    const newX = gestureState.dx + this.gestureDelay;
                    position.setValue({ x: newX, y: 0 });
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx < 150) {
                    Animated.timing(this.state.position, {
                        toValue: { x: 0, y: 0 },
                        duration: 150,
                    })
                        .start(() => {
                            this.setScrollViewEnabled(true);
                        });
                } else {
                    Animated.timing(this.state.position, {
                        toValue: { x: width, y: 0 },
                        duration: 300,
                    })
                        .start(() => {
                            this.removePost();
                            this.setScrollViewEnabled(true);
                            // this.enableTouch();

                            Animated.timing(this.state.position, {
                                toValue: { x: 0, y: 0 },
                                duration: 150,
                            });
                        });
                }
            },
        });

        this.state = { position, isTouchEnabled: false };
    }

    setScrollViewEnabled(enabled) {
        if (this.scrollViewEnabled !== enabled) {
            this.props.setScrollEnabled(enabled);
            this.scrollViewEnabled = enabled;
        }
    }

    enableTouch = () => {
        this.setState({
            isTouchEnabled: true
        });
    };

    disableTouch = () => {
        this.setState({
            isTouchEnabled: false
        });
    };


    goDetailsScreen = (postDetailInfo) => {
        if (this.props.onPress) {
            this.props.onPress(postDetailInfo);
        }
    };

    removePost = async () => {
        await this.props.removePost(this.props.post.id);
        this.props.getPosts();
    };

    render() {
        return (
            <View style={styles.postContainer}>
                <Animated.View
                    style={[this.state.position.getLayout()]}
                    {...this.panResponder.panHandlers}
                >
                    <TouchableHighlight
                        disabled={this.state.isTouchEnabled}
                        style={styles.innerPostContainer}
                        onPress={() => this.goDetailsScreen(this.props.post)}
                    >
                        <View>
                            <View style={styles.absoluteCell}>
                                <Text style={styles.absoluteCellText}>DELETE</Text>
                            </View>

                            <View style={styles.innerCell}>
                               <View>
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
                                               {this.props.post.formattedDate}
                                           </Text>
                                       </View>
                                   </View>
                               </View>

                            </View>
                        </View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}

export default Post;

const styles = {
    postContainer: {
        height: 80,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: -100,
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    absoluteCell: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    absoluteCellText: {
        margin: 16,
        color: '#fff',
    },

    innerCell: {
        height: 80,
        width,
        marginLeft: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerPostContainer: {
        flexGrow: 1,
        flexDirection: 'column'
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
