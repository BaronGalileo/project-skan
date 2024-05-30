import React, {useEffect, useState} from "react";
import "./test.css";

// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     const[coconut, setCoconut] = useState
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

  function FlavorForm() {

    const[coconut, setCoconut] = useState('coconut')

    useEffect(()=>{

    },[])

    const handleChange = (event) => {
        setCoconut({value: event.target.value});
      }

    const handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + coconut.value);
        // event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select  onChange={handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  }
  export {FlavorForm}