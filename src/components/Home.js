import { useState} from 'react';
import styled from 'styled-components';

function Home() {
    const [height, setHeight]= useState(null);
    const [weight, setWeight]= useState(null);

    const Input = styled.input.attrs(props => ({
        type: "number",
        size: props.size || "1em",
    }))`
        border: 2px solid tomato;
        color: tomato;
        margin: ${props => props.size};
        padding: ${props => props.size};
      `;
      const Button = styled.button`
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;
    const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

    return (
        <div>
            <div>
                Your Height : <Input placeholder="enter your height" size="2em" 
                value={height}
                onChange={(e)=> setHeight(e.target.value)}
                />
            </div>
            <div>
                Your Weight: <Input placeholder="enter your weight" size="2em"
                value={weight}
                onChange={(e)=> setWeight(e.target.value)} />
            </div>
            <TomatoButton>Compute BMI</TomatoButton>
        </div>

    )
}

export default Home;
