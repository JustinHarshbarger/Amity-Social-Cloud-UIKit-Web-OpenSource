import React, { useContext } from 'react';
import { PageTypes, useNavigation } from '~/v4/core/providers/NavigationProvider';
import { Mode } from '~/v4/social/pages/PostComposerPage/PostComposerPage';

export interface PageBehavior {
  AmityStoryViewPageBehavior?: {
    onCloseAction?(): void;
    hyperLinkAction?(context: Record<string, unknown>): void;
  };
  AmityDraftStoryPageBehavior?: {
    onCloseAction?(): void;
  };
  onClickHyperLink?(): void;
  AmitySocialHomePageBehavior?: Record<string, unknown>;
  AmityGlobalFeedComponentBehavior?: {
    goToPostDetailPage?: (context: { postId: string }) => void;
    goToViewStoryPage?: (context: {
      targetId: string;
      targetType: Amity.StoryTargetType;
      storyType: 'communityFeed' | 'globalFeed';
      targetIds?: string[];
    }) => void;
  };
  AmityPostDetailPageBehavior?: Record<string, unknown>;
  AmityPostContentComponentBehavior?: {
    goToCommunityProfilePage?: (context: { communityId: string }) => void;
    goToUserProfilePage?: (context: { userId: string }) => void;
  };
  AmitySocialGlobalSearchPageBehavior?: Record<string, unknown>;
  AmityCommunitySearchResultComponentBehavior?: {
    goToCommunityProfilePage?: (context: { communityId: string }) => void;
  };
  AmityCreatePostMenuComponentBehavior?: {
    goToSelectPostTargetPage?(): void;
    goToStoryTargetSelectionPage?(): void;
  };
  AmityPostTargetSelectionPage?: {
    goToPostComposerPage?: (context: {
      mode: Mode.CREATE | Mode.EDIT;
      targetId: string | null;
      targetType: 'community' | 'user';
      community?: Amity.Community;
      post?: Amity.Post;
    }) => void;
  };
  AmityStoryTargetSelectionPage?: {
    goToStoryCreationPage?(context: {
      targetId: string | null;
      targetType: Amity.StoryTargetType;
      mediaType: { type: 'image'; url: string } | { type: 'video'; url: string };
      storyType: 'communityFeed' | 'globalFeed';
    }): void;
  };
  AmityPostComposerPageBehavior?: {
    goToSocialHomePage?(): void;
  };
}

const PageBehaviorContext = React.createContext<PageBehavior | undefined>(undefined);

interface PageBehaviorProviderProps {
  children: React.ReactNode;
  pageBehavior?: Partial<PageBehavior>;
}

export const PageBehaviorProvider: React.FC<PageBehaviorProviderProps> = ({
  children,
  pageBehavior = {},
}) => {
  const {
    page,
    onBack,
    goToPostDetailPage,
    goToCommunityProfilePage,
    goToUserProfilePage,
    goToViewStoryPage,
    onChangePage,
    goToSelectPostTargetPage,
    goToStoryTargetSelectionPage,
    goToStoryCreationPage,
    goToPostComposerPage,
    goToSocialHomePage,
  } = useNavigation();
  const navigationBehavior: PageBehavior = {
    AmityStoryViewPageBehavior: {
      onCloseAction: () => {
        if (pageBehavior?.AmityStoryViewPageBehavior?.onCloseAction) {
          return pageBehavior.AmityStoryViewPageBehavior.onCloseAction();
        }
        onChangePage(PageTypes.SocialHomePage);
      },
      hyperLinkAction: (context: Record<string, unknown>) => {
        if (pageBehavior?.AmityStoryViewPageBehavior?.hyperLinkAction) {
          return pageBehavior.AmityStoryViewPageBehavior.hyperLinkAction(context);
        }
      },
    },
    AmityDraftStoryPageBehavior: {
      onCloseAction: () => {
        if (pageBehavior?.AmityDraftStoryPageBehavior?.onCloseAction) {
          return pageBehavior.AmityDraftStoryPageBehavior.onCloseAction();
        }
        if (page.type === PageTypes.DraftPage && page.context.storyType === 'communityFeed') {
          goToCommunityProfilePage(page.context.targetId);
        } else {
          goToSocialHomePage();
        }
      },
    },
    onClickHyperLink: () => {},
    AmitySocialHomePageBehavior: {},
    AmityGlobalFeedComponentBehavior: {
      goToPostDetailPage: (context: { postId: string }) => {
        if (pageBehavior?.AmityGlobalFeedComponentBehavior?.goToPostDetailPage) {
          return pageBehavior?.AmityGlobalFeedComponentBehavior.goToPostDetailPage(context);
        }
        goToPostDetailPage(context.postId);
      },
      goToViewStoryPage: (context: {
        targetId: string;
        targetType: Amity.StoryTargetType;
        storyType: 'communityFeed' | 'globalFeed';
      }) => {
        if (pageBehavior?.AmityGlobalFeedComponentBehavior?.goToViewStoryPage) {
          return pageBehavior?.AmityGlobalFeedComponentBehavior.goToViewStoryPage(context);
        }
        goToViewStoryPage({
          targetId: context.targetId,
          targetType: context.targetType,
          storyType: context.storyType,
        });
      },
    },
    AmityPostDetailPageBehavior: {},
    AmityPostContentComponentBehavior: {
      goToCommunityProfilePage: (context: { communityId: string }) => {
        if (pageBehavior?.AmityPostContentComponentBehavior?.goToCommunityProfilePage) {
          return pageBehavior.AmityPostContentComponentBehavior.goToCommunityProfilePage(context);
        }
        goToCommunityProfilePage(context.communityId);
      },
      goToUserProfilePage: (context: { userId: string }) => {
        if (pageBehavior?.AmityPostContentComponentBehavior?.goToUserProfilePage) {
          return pageBehavior.AmityPostContentComponentBehavior.goToUserProfilePage(context);
        }
        goToUserProfilePage(context.userId);
      },
    },

    AmitySocialGlobalSearchPageBehavior: {},
    AmityCommunitySearchResultComponentBehavior: {
      goToCommunityProfilePage: (context: { communityId: string }) => {
        if (pageBehavior?.AmityCommunitySearchResultComponentBehavior?.goToCommunityProfilePage) {
          return pageBehavior.AmityCommunitySearchResultComponentBehavior.goToCommunityProfilePage(
            context,
          );
        }
        goToCommunityProfilePage(context.communityId);
      },
    },
    AmityCreatePostMenuComponentBehavior: {
      goToSelectPostTargetPage() {
        if (pageBehavior?.AmityCreatePostMenuComponentBehavior?.goToSelectPostTargetPage) {
          return pageBehavior.AmityCreatePostMenuComponentBehavior.goToSelectPostTargetPage();
        }
        goToSelectPostTargetPage();
      },
      goToStoryTargetSelectionPage() {
        if (pageBehavior?.AmityCreatePostMenuComponentBehavior?.goToStoryTargetSelectionPage) {
          return pageBehavior.AmityCreatePostMenuComponentBehavior.goToStoryTargetSelectionPage();
        }
        goToStoryTargetSelectionPage();
      },
    },
    AmityPostTargetSelectionPage: {
      goToPostComposerPage: (context: {
        mode: Mode.CREATE | Mode.EDIT;
        targetId: string | null;
        targetType: 'community' | 'user';
        community?: Amity.Community;
        post?: Amity.Post;
      }) => {
        if (pageBehavior?.AmityPostTargetSelectionPage?.goToPostComposerPage) {
          return pageBehavior.AmityPostTargetSelectionPage.goToPostComposerPage(context);
        }
        goToPostComposerPage(
          context.mode,
          context.targetId,
          context.targetType,
          context.community,
          context.post,
        );
      },
    },
    AmityStoryTargetSelectionPage: {
      goToStoryCreationPage: (context: {
        targetId: string;
        targetType: Amity.StoryTargetType;
        mediaType: { type: 'image'; url: string } | { type: 'video'; url: string };
        storyType: 'communityFeed' | 'globalFeed';
      }) => {
        if (pageBehavior?.AmityStoryTargetSelectionPage?.goToStoryCreationPage) {
          return pageBehavior.AmityStoryTargetSelectionPage.goToStoryCreationPage(context);
        }
        goToStoryCreationPage(context);
      },
    },
    AmityPostComposerPageBehavior: {
      goToSocialHomePage() {
        if (pageBehavior?.AmityPostComposerPageBehavior?.goToSocialHomePage) {
          return pageBehavior.AmityPostComposerPageBehavior.goToSocialHomePage();
        }
        goToSocialHomePage();
      },
    },
  };

  return (
    <PageBehaviorContext.Provider value={navigationBehavior}>
      {children}
    </PageBehaviorContext.Provider>
  );
};

export const usePageBehavior = () => {
  const pageBehavior = useContext(PageBehaviorContext);
  if (!pageBehavior) {
    throw new Error('usePageBehavior must be used within a PageBehaviorProvider');
  }
  return pageBehavior;
};
