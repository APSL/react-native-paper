/* @flow */

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';

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

  renderOptions = (options: Array<Object>) =>
    options.map((item, index) => (
      <View style={{ flexDirection: 'column' }} key={`option-${index + 1}`}>
        <TouchableOpacity onPress={item.onPress}>
          <View style={styles.item}>
            <List.Icon icon={item.icon} />
            <Text style={[styles.text, { fontFamily: this.props.fontFamily }]}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

  renderTitle() {
    const { title, titleStyle } = this.props;

    if (!title) {
      return;
    }
    return <Text style={[styles.title, titleStyle]}>{title}</Text>;
  }

  render() {
    const options = [
      {
        title: 'Favorite',
        icon: 'favorite',
        onPress: () => null,
      },
      {
        title: 'Share with contact',
        icon: 'share',
        onPress: () => null,
      },
      {
        title: 'Search',
        icon: 'search',
        onPress: () => null,
      },
    ];
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        {this.renderOptions(options)}
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
    backgroundColor: 'white',
  },
  text: {
    paddingLeft: 32,
    textAlignVertical: 'center',
    color: '#000',
    opacity: 0.87,
  },
  item: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    height: 42,
    color: '#000',
    opacity: 0.54,
    marginLeft: 16,
  },
});

export default BottomSheet;
