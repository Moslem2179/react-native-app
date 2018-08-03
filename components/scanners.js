import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Camera from 'react-native-camera';

export default class BarcodeScan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            barcodeData: '',
            barcodeType: ''
        }
    }

    /* This will gets rendered once the camera detects a QR barcode
    // and saves the value into the qrcode prop 
    */
    onBarCodeRead = (e) => this.setState({barcodeData: e.data, barcodeType: e.type});

    render() {
        return (
            <View style={{position: 'absolute', width: 650, height: 600, right: 0, bottom: 0}}>
                <Camera
                    style={{position: 'absolute', width: 650, height: 600, right: 0, bottom: 0}}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={{
                        backgroundColor: 'white'
                    }}> BarcodeNumber: {this.state.barcodeData} and Barcode Type is: {this.state.barcodeType}
                    </Text>
                </Camera>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        height: 30,
        position: 'absolute', 
        flexDirection: 'row',
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
