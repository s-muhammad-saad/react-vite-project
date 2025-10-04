import Header from './components/Header';
import Counter from './components/Counter';
import TaskList from './components/TaskList';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return(
    <ThemeProvider>
      <Header title="My Awesome Task Manager" subtitle="Your ultimate productivity partner" />
      <Counter />
      <TaskList />
      <ThemeToggleButton />
    </ThemeProvider>
  );
}

export default App;