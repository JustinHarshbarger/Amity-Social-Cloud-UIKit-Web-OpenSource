import React from 'react';
import clsx from 'clsx';

import styles from './PostCommentSkeleton.module.css';
import { useCustomization } from '~/v4/core/providers/CustomizationProvider';
import { useGenerateStylesShadeColors } from '~/v4/core/providers/ThemeProvider';
import { useAmityComponent } from '~/v4/core/hooks/uikit';

interface PostCommentSkeletonProps {
  pageId?: string;
}

export const PostCommentSkeleton = ({ pageId = '*' }: PostCommentSkeletonProps) => {
  const componentId = 'post_comment';
  const { accessibilityId, isExcluded, themeStyles } = useAmityComponent({
    pageId,
    componentId,
  });

  if (isExcluded) return null;

  return (
    <div
      data-qa-anchor={accessibilityId}
      className={clsx(styles.postCommentSkeleton, styles.postCommentSkeleton__animation)}
      style={themeStyles}
    >
      <div
        className={clsx(styles.postCommentSkeleton__avatar, styles.postCommentSkeleton__animation)}
      />
      <div
        className={clsx(styles.postCommentSkeleton__details, styles.postCommentSkeleton__animation)}
      >
        <div
          className={clsx(
            styles.postCommentSkeleton__content,
            styles.postCommentSkeleton__animation,
          )}
        />
        <div className={styles.postCommentSkeleton__content__bar} />
      </div>
    </div>
  );
};
