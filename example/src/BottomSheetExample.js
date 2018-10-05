/* @flow */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, withTheme, BottomSheet } from 'react-native-paper';

class BottomSheetExample extends React.Component<{}> {
  static title = 'Bottom Sheet';

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this._bottomSheet.open();
          }}
          mode="outlined"
        >
          Open
        </Button>
        <BottomSheet
          ref={(ref: any) => {
            this._bottomSheet = ref;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(BottomSheetExample);
