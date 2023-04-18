import { useState } from 'react';
import data from './data'
const App = () => {
  const [questions, setQuestions] = useState(data);
  return <h2>Accordion Starter</h2>;
};
export default App;
