/* @flow */

import * as React from 'react';
import { View, StyleSheet, Modal, Text } from "react-native";

class BottomSheet extends React.Component<{}> {
  state = {
    isVisible: false,
  };

  open(): Function {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    return (
      <View style={{ margin: 100 }}>
        <Modal transparent={false} visible={this.state.isVisible}>
          <Text>Hello modal</Text>
        </Modal>
      </View>
    );
  }
}

export default BottomSheet;
