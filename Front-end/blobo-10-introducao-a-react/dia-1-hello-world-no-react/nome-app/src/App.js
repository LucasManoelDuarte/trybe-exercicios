const taskList = ['Enviar extratos', 'Realizar exercícios', 'Lavar a louça', 'Jogar Persona 5'];

const Task = (list) => {
  return (
    <ol>
      {
        list.map((item) => <li>{item}</li>)
      }
    </ol>
  );
}

function App() {
  return Task(taskList);
}

export default App;
