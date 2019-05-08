import React, {Component} from 'react';
import './App.css';


class App extends Component {
 
  render() 
{
  return (
    <form>
    Number 1: <input type="text" name="num1" /><br />
    Number 2: <input type="text" name="num2" /><br />
    Sum: <input type="text" name="sum" /><br />
    <input type="button" defaultValue="Sum" onclick="calcSum()" />
  </form>           
  );
  
  function calcSum() {
  let num1 = document.getElementsByName("num1")[0].value;
  let num2 = document.getElementsByName("num2")[0].value;
  let sum = Number(num1) + Number(num2);
  document.getElementsByName("sum")[0].value = sum;
  }

}
}
export default App;
