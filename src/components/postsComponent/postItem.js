import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, Animated, PanResponder, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class PostItem extends PureComponent {

    constructor(props) {
        super(props);

        this.gestureDelay = -35;
        this.scrollViewEnabled = true;

        const position = new Animated.ValueXY();
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                this.setTouchableDisable();
                return false;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                this.setTouchableDisable();
                return true;
            },
            onPanResponderTerminationRequest: (evt, gestureState) => {
                this.setTouchableEnable();
                return false;
            },
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 35) {
                    this.setScrollViewEnabled(false);
                    let newX = gestureState.dx + this.gestureDelay;
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
                            this.props.success(this.props.text);
                            this.setScrollViewEnabled(true);
                        });
                }
            },
        });

        this.state = { position, disableTouch: false };
    }

    setTouchableDisable = () => {
      this.setState({
          disableTouch: true
      });
    };

    setTouchableEnable = () => {
        this.setState({
            disableTouch: false
        });
    };

    setScrollViewEnabled(enabled) {
        if (this.scrollViewEnabled !== enabled) {
            this.props.setScrollEnabled(enabled);
            this.scrollViewEnabled = enabled;
        }
    }


    goDetailsScreen = (postDetailInfo) => {
        if (this.props.onPress) {
            this.props.onPress(postDetailInfo);
        }
    };

    render() {
        return (
            <View style={styles.postContainer}>
                <Animated.View
                    style={[this.state.position.getLayout()]}
                    {...this.panResponder.panHandlers}
                >
                    <TouchableOpacity
                        disabled={this.state.disableTouch}
                        style={styles.innerPostContainer}
                        onPress={() => this.goDetailsScreen(this.props.post)}
                    >
                        <View style={styles.absoluteCell}>
                            <Text style={styles.absoluteCellText}>DELETE</Text>
                        </View>

                        <View style={styles.innerCell}>
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
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

export default PostItem;

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
