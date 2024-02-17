import { requireNativeViewManager } from 'expo-modules-core';
import React, { ReactElement } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { mapToNativeModifiers } from '../../utils/modifiers';
import { ListProps, NativeListProps } from './types';

const NativeList: React.ComponentType<NativeListProps> =
  requireNativeViewManager('List');

export function List({ modifiers, style, children, ...restProps }: ListProps) {
  const { width, height } = useWindowDimensions();
  const insetWidth = width - 80;
  const insetHeight = 30;
  const groupedWidth = width - 20;
  const groupedHeight = 30;
  const mappedChildren = React.Children.map(children, (child: ReactElement) => {
    return (
      <View
        style={{
          width: insetWidth,
        }}
      >
        {child}
      </View>
    );
  });

  return (
    <NativeList
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        width: '100%',
        height: 500,
        ...(style as object),
      }}
      children={mappedChildren}
      {...restProps}
    />
  );
}