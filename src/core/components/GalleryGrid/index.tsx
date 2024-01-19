import React from 'react';

import ExpandedGrid from './ExpandedGrid';
import TruncateGrid from './TruncatedGrid';

interface GalleryGridProps<T> {
  className?: string;
  items: T[];
  itemKey?: keyof T;
  truncate?: boolean;
  onClick?: (index: number) => void;
  renderItem: (item: T) => React.ReactNode;
}

const GalleryGrid = <T,>({
  className,
  items = [],
  itemKey,
  truncate,
  onClick,
  renderItem,
}: GalleryGridProps<T>) => {
  if (truncate || items.length <= 4) {
    return (
      <TruncateGrid
        className={className}
        onClick={onClick}
        renderItem={renderItem}
        items={items}
        itemKey={itemKey}
      />
    );
  }

  return (
    <ExpandedGrid
      className={className}
      items={items}
      itemKey={itemKey}
      onClick={onClick}
      renderItem={renderItem}
    />
  );
};

export default GalleryGrid;
