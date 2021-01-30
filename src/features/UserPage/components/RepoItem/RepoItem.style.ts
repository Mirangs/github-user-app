import styled from 'styled-components'

const Style = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  border: 1px solid #eee;
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export default Style
