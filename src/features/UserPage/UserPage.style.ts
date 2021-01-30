import styled from 'styled-components'

const Style = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;

  .back-link {
    flex-basis: 100%;
    margin: 20px 0;
  }

  .user-image {
    width: 100%;
    height: auto;
  }

  .col-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 40%;
    padding-right: 10px;
  }

  .col-right {
    flex-basis: 60%;
  }
`

export default Style
