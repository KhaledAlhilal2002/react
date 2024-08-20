import './App.css';
import JSX from './Lect1-jsx';
import PassProps from './Lect2-props';
function App() {
  const divStyle = {
    padding: '10px',
    margin: '10px',
  }
  return (
    <div style={divStyle}>
      <JSX />
      <PassProps headerContent="This is h-4" buttonName="I'm Button" />
    </div>
  );
}

export default App;
