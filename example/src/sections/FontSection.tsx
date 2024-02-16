import React from 'react';
import { Label, List, Text } from 'swiftui-react-native';

/**
 * A list of SwiftUI Fonts
 */
export const FontSection = () => {
  return (
    <List style={{ flex: 1 }}>
      <Text alignment="leading" font="body">
        Body
      </Text>
      <Text alignment="leading" font="callout">
        Callout
      </Text>
      <Text alignment="leading" font="caption">
        Caption
      </Text>
      <Text alignment="leading" font="caption2">
        Caption 2
      </Text>
      <Text alignment="leading" font="footnote">
        Footnote
      </Text>
      <Text alignment="leading" font="headline">
        Headline
      </Text>
      <Text alignment="leading" font="largeTitle">
        Large Title
      </Text>
      <Text alignment="leading" font="subheadline">
        Subheadline
      </Text>
      <Text alignment="leading" font="title">
        Title
      </Text>
      <Text alignment="leading" font="title2">
        Title 2
      </Text>
      <Text alignment="leading" font="title3">
        Title 3
      </Text>
      <Label title="Labels" systemImage="square.grid.3x1.folder.badge.plus" />
    </List>
  );
};
