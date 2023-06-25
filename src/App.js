import './App.css';

const App = () => {
  const name = 'Frankie';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : 'someone'}!</h1>
    </div>
  );
};

export default App;

// ternary statements allow you to set a constant with a boolean to true or false then insert a ? for {than} and a : for {or do this}