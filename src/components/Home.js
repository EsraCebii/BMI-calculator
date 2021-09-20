import { useState} from 'react';
import styled from 'styled-components';


function Home() {
    const [height, setHeight]= useState("");
    const [weight, setWeight]= useState("");
    const [bmiResult, setBmiResult]= useState(null);
    const [status, setStatus]= useState("");
    
    
    const calculateBMI= () => {
        const bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        
        setBmiResult(bmi);

        let bmiStatus= getStatus(bmi)
        setStatus(bmiStatus)

        setHeight("");
        setWeight("");
    }

    const getStatus = (bmi)=> {
        if(bmi < 18.5) return "Underweight";
        else if(bmi >= 18.5 && bmi <24.9) return "Normal";
        else if(bmi >= 25 && bmi <29.9) return "Overweight";
        else return "Obese"
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
            
            <TomatoButton
            onClick={calculateBMI}
            >Compute BMI</TomatoButton>
            {bmiResult && 
                <div>
                <h2>You are currently: {status} </h2> 
                <h2>Your BMI is: {bmiResult}</h2>
                </div>
            }
        </div>

    )
}

export default Home;
