import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {
    transform: scale(0.9);
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
