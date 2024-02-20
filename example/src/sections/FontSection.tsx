import React from 'react';
import { Label, List, Text } from 'swiftui-react-native';

/**
 * A list of SwiftUI Fonts
 */
export const FontSection = () => {
  return (
    <List style={{ flex: 1 }}>
      <Text font="body">Body</Text>
      <Text font="callout">Callout</Text>
      <Text font="caption">Caption</Text>
      <Text font="caption2">Caption 2</Text>
      <Text font="footnote">Footnote</Text>
      <Text font="headline">Headline</Text>
      <Text font="largeTitle">Large Title</Text>
      <Text font="subheadline">Subheadline</Text>
      <Text font="title">Title</Text>
      <Text font="title2">Title 2</Text>
      <Text font="title3">Title 3</Text>
      <Label title="Label" systemImage="square.grid.3x1.folder.badge.plus" />
    </List>
  );
};
