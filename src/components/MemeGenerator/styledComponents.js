// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  padding: ${props => (props.padding ? '50px' : 0)};
`

export const Form = styled.form`
  width: 100%;
`

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
`
export const Label = styled.label`
  color: #1e293b;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 23px;
`

export const Input = styled.input`
  border: 1px solid #1e293b;
  padding-left: 10px;
  border-radius: 5px;
  width: 80%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
`

export const Select = styled.select`
  width: 80%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #ffffff;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  width: 150px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-image: url('${props => props.img}');
  width: 80%;
  height: 60vh;
  background-size: cover;
`

export const MemeParagraph = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: ${props => props.fontSize}px;
`
