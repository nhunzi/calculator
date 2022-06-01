import "./styles.css"
import Header from "./Header";
import Example from "./Example"
import Button from "./Button"
import { useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";


function App() {

    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () =>{
        setResult("");
    }

    const backspace = () => {
        if ({result} === ""){

        }
        else{
            setResult(result.slice(0, - 1));
        }
    }

    const squared = async () => {
        let sqrd = (result * result).toString();
        if (sqrd === "NaN") {
            setResult(" !! Error in expression !!");
            await sleep(3000);
            setResult("");
        }
        else{
            setResult(sqrd);
        }
    }

    const square_root = async () => {
        let sqr_root = Math.sqrt(result).toString();
        if (sqr_root === "NaN") {
            setResult(" !! Error in expression !!");
            await sleep(3000);
            setResult("");
        }
        else{
            setResult(sqr_root);
        }
    }

    const calculate_expr = async () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString());
        } catch (err) {
            setResult(" !! Error in expression !!");
            await sleep(3000);
            setResult("")
        }
    }

    return (
        <>
            <Header></Header>
            <div className="container">
                <form className = "text-box">
                    <input type = "text" value={result} placeholder="Enter an expression."/>
                </form>
                <div className="keyboard">
                    <button name = 'AC' onClick = {clear} className="clears" >AC</button>
                    <button name = 'CLR' onClick = {backspace} className="clears">CLR</button>
                    <button name = '.' onClick = {handleClick} className="clears">.</button>
                    <button name = '/' onClick = {handleClick} className="operator">÷</button>
                    <button name = '7' onClick={handleClick}>7</button>
                    <button name = '8' onClick={handleClick}>8</button>
                    <button name = '9' onClick={handleClick}>9</button>
                    <button name = '*' onClick={handleClick} className="operator">x</button>
                    <button name = '4' onClick={handleClick}>4</button>
                    <button name = '5' onClick={handleClick}>5</button>
                    <button name = '6' onClick={handleClick}>6</button>
                    <button name = '-' onClick={handleClick} className="operator">-</button>
                    <button name = '1' onClick={handleClick}>1</button>
                    <button name = '2' onClick={handleClick}>2</button>
                    <button name = '3' onClick={handleClick}>3</button>
                    <button name = '+' onClick={handleClick} className="operator">+</button>
                    <button name = '0' onClick={handleClick}>0</button>
                    <button name = 'n²' onClick={squared}>n²</button>
                    <button name = '√n' onClick={square_root}>√n</button>
                    <button name = '=' onClick = {calculate_expr}  className="operator">=</button>
                </div>
            </div>
        </>
    )
}

export default App;