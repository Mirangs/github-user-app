import styled from 'styled-components'

const Styles = styled.section`
  max-width: 500px;
  border: 1px solid #eee;
  border-radius: 5px;

  .item-link {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  .item-image {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
`

export default Styles
