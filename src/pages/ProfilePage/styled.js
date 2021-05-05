import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const PostCardContainer = styled.div`
  width: 60vw;
  margin: 5%;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`

export const PostCardContent = styled.div`
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
`

export const RightContent = styled.div`
    margin-left: 5%;
  margin-top: 4px;
`

export const LeftContent = styled.div`

`
