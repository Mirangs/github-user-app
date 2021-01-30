import styled from 'styled-components'

const Style = styled.section`
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li:not(:last-of-type) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 992px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    li {
      flex-basis: 18%;
    }
  }
`

export default Style
