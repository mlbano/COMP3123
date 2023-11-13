import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
  <form>
      <header className= "Data-header">
        <h1>Data Entry Form</h1>
      </header>

      <label for="email">Email:</label><br></br>
      <input type="text" id="email" name="email"></input><br></br>

      <label for="fullName">Full Name:</label><br></br>
      <input type="text" id="fullName" name="fullName"></input><br></br>

      <label for="address">Address:</label><br></br>
      <input type="text" id="address" name="address"></input><br></br>

      <label for="address2">Address 2:</label><br></br>
      <input type="text" id="address2" name="address2"></input><br></br>

      <label for="city">City:</label><br></br>
      <input type="text" id="city" name="city"></input><br></br>


      <label for="province">Province:</label><br></br>

        <select name="province" id="province">
          <option value="alberta">Alberta</option>
          <option value="britishColumbia">British Columbia</option>
          <option value="manitoba">Manitoba</option>
          <option value="newBrunswick">New Brunswick</option>
          <option value="newfoundland">Newfoundland and Labrador</option>
          <option value="novaScotia">Nova Scotia</option>
          <option value="ontario">Ontario</option>
          <option value="pei">Prince Edward Island</option>
          <option value="quebec">Quebec</option>
          <option value="saskatchewan">Saskatchewan</option>
        </select><br></br>

      <label for="postalCode">Postal Code:</label><br></br>
      <input type="text" id="postalCode" name="postalCode"></input><br></br>


      <input type="submit" name="myButton" value="Submit"></input>

  </form> 
  </div>
  );
}

export default App;