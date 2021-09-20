import { useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Home() {
    const [height, setHeight]= useState("");
    const [weight, setWeight]= useState("");
    const [bmiResult, setBmiResult]= useState(null);

    const calculateBMI= () => {
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);
    }


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
                <span>Your Height :</span> <input placeholder="cm" size="2em" 
                value={height}
                onChange={(e)=> setHeight(e.target.value)}
                />
            </div>
            <div>
                <span>Your Weight:</span> <input placeholder="kg" size="2em"
                value={weight}
                onChange={(e)=> setWeight(e.target.value)} />
            </div>
            <Link  to={`/result`}>
            <TomatoButton
            onClick={calculateBMI}
            >Compute BMI</TomatoButton>
            <div> Your DMI: {bmiResult}</div>
            </Link>
        </div>

    )
}

export default Home;
