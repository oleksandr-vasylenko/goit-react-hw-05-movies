import styled from 'styled-components';

export const CastList = styled.ul`
  padding-right: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  align-content: center;
`;

export const ActorItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const ActorName = styled.p`
  padding: 8px;
  font-weight: 700;
`;
