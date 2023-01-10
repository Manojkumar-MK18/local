import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components'
import fonts, { weight } from '../../const/fonts'
import { H1 } from '../../typography'
import LoginBackI from '../../assets/LoginBack.jpg'

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* background-image: url(${LoginBackI});
  background-size: auto; */
  @media (min-width: 500px) {
    background-size: 100% 100rem;
    background-repeat: no-repeat;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  height: 400px;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  @media (min-width: 769px) {
    width: 28%;
  }
`

export const FormContainer = styled(Form)`
  max-width: 69%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  #form-input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    ::placeholder {
      font-size: ${fonts.medium}px;
    }
  }
  .form-control:focus {
    box-shadow: none;
    border-color: lightgray;
    background-color: white !important;
  }
  @media (max-width: 500px) {
    max-width: 90%;
  }
`
export const Title = styled(H1)`
  text-align: center;
  margin-top: 10px;
  font-size: ${fonts.xxLarge}px;
  font-weight: ${weight.medium};
  line-height: 1.2;
`

export const IconWrapper = styled.span`
  border: 0.5px solid lightgray;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  padding: 1px 7px;
`
export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fonts.medium}px;
  color: ${({ theme }) => theme?.icon?.normal};
  margin: auto 8px;
`

export const LoginButton = styled(Button)`
  margin: auto;
  border: none;
  width: 100px;
`

export const LogoWrapper = styled.div`
  width: 120px;
  height: 50%;
  display: flex;
  margin: 16px auto;
`

export const Logo = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 100%;
`
export const RegisterText = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 0.5rem;
  font-size: ${fonts.medium}px;
`

export const SignupLink = styled(Link)`
  padding-left: 5px;
  text-decoration: none;
  font-weight: ${weight.bold};
  color: #58035e;
  &:hover {
    color: #58035e;
  }
`
