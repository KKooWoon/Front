import styled from 'styled-components';

export const RaceTitle = styled.div`
  display: inline-block;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 20px;
  border: 2px solid var(--primary-purple);
  color: var(--primary-purple);
  max-width: 163px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  &.active {
    background-color: var(--primary-purple);
    color: white;
  }
`;
