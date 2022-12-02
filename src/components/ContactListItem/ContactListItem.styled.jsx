import styled from '@emotion/styled';

export const Item = styled.li`
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DeleteBtn = styled.button`
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #dedede;
  font-size: 12px;

  margin-left: 15px;
`;
