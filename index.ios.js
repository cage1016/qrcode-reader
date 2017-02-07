/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NavigatorIOS
} from 'react-native';

var QRCodeScreen = require('./QRCodeScreen');

export default class qrcodeReader extends Component {
    render() {
        return (<NavigatorIOS style={styles.container} initialRoute={{
            title: 'Index',
            backButtonTitle: 'Back',
            component: Index
        }}/>);
    }
}

var Index = React.createClass({

    getInitialState() {
        return {data: ""};
    },

    render: function() {
        return (
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={this._onPressQRCode}>
                    <Text>Read QRCode</Text>
                </TouchableOpacity>
                <Text>{this.state.data}</Text>
            </View>
        );
    },

    _onPressQRCode: function() {
        this.props.navigator.push({
            component: QRCodeScreen,
            title: 'QRCode',
            passProps: {
                onSucess: this._onSucess
            }
        });
    },

    _onSucess: function(result) {
        console.log(result);
        this.setState({data: result});
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('qrcodeReader', () => qrcodeReader);
