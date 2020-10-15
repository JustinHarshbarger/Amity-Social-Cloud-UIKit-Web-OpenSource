import styled from 'styled-components';

import UIOptions from '~/core/components/Options';
import { SecondaryButton } from '~/core/components/Button';

export const Options = styled(UIOptions)`
  margin-left: auto;
`;

export const PostContainer = styled.div`
  padding: 16px;
  background: #ffffff;
  border: 1px solid #edeef2;
  border-radius: 4px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
`;

export const PostAuthor = styled.div`
  display: flex;
  cursor: pointer;
`;

export const PostContent = styled.div`
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.palette.neutral.main};
  white-space: pre-wrap;
  ${({ theme }) => theme.typography.body}
`;

export const PostInfo = styled.div`
  margin-left: 8px;
`;

export const AuthorName = styled.div`
  ${({ theme }) => theme.typography.title}
`;

export const ReadMoreButton = styled(SecondaryButton)`
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px;
`;
