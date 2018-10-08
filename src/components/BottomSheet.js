/* @flow */

import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { List, TouchableRipple } from 'react-native-paper';

type Props = {};
type State = {};

class BottomSheet extends React.Component<Props, State> {
  state = {};

  open() {
    // TODO: Animate view
  }

  onLayout = (event: Object) => {
    // TODO: onLayout
  };

  render() {
    const options = [
      {
        title: 'Share',
        icon: 'share',
        onPress: () => null,
      },
      {
        title: 'Get link',
        icon: 'link',
        onPress: () => null,
      },
      {
        title: 'Edit name',
        icon: 'edit',
        onPress: () => null,
      },
      {
        title: 'Delete collection',
        icon: 'delete',
        onPress: () => null,
      },
    ];

    const { titleStyle, title } = this.props;
    const { height } = Dimensions.get('window').height;

    return (
      <View
        style={[
          styles.container,
          {
            minHeight: 0,
            maxHeight: height / 2, // 0,
          },
        ]}
        onLayout={this.onLayout}
      >
        {this.props.title ? (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        ) : null}
        {options.map((item, index) => (
          <View
            style={{
              flexDirection: 'column',
            }}
            key={`option-${index + 1}`}
          >
            <TouchableRipple onPress={item.onPress}>
              <View style={styles.item}>
                <List.Icon icon={item.icon} color="grey" />
                <Text style={[styles.text]}>{item.title}</Text>
              </View>
            </TouchableRipple>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  text: {
    paddingLeft: 32,
    color: '#000000',
  },
  item: {
    flexDirection: 'row',
    height: 48, // 48
    alignItems: 'center',
  },
  title: {
    color: '#000',
    opacity: 0.84,
    padding: 16,
  },
});

export default BottomSheet;
