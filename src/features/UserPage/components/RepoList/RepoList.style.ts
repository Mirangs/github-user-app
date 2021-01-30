import styled from 'styled-components'

const Style = styled.section`
  width: 100%;
  padding-top: 20px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li:not(:last-of-type) {
    margin-bottom: 10px;
  }
`

export default Style
