import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/pro-regular-svg-icons';
import { faArrowCircleUp } from '@fortawesome/pro-solid-svg-icons';

export const SendMessageIcon = styled(FaIcon).attrs({ icon: faArrowCircleUp })`
  font-size: 28px;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 8px;
  color: #0f86fe;
`;

export const ImageMessageIcon = styled(FaIcon).attrs({ icon: faImage })`
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;
  color: ${({ theme }) => theme.palette.neutral.main};
`;

export const FileMessageIcon = styled(FaIcon).attrs({ icon: faPaperclip })`
  font-size: 18px;
  margin-right: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.neutral.main};
`;

export const MessageComposeBarContainer = styled.div`
  padding: 12px 16px 16px 16px;
  background: #ffffff;
  border-top: 1px solid #e3e4e8;
  display: flex;
  align-items: center;
`;

export const MessageComposeBarInput = styled.input`
  height: 34px;
  padding: 6px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  flex-grow: 1;
`;
