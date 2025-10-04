import useFetch from '../hooks/useFetch';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

function TaskList(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=15';

    const { data: tasks, isLoading, error } = useFetch<Task[]>(apiUrl);

    if(isLoading){
        return <h2>Loading....</h2>
    };

    if(error){
        return <p style={{color: 'red'}}>{error}</p>
    };

    return (
        <div className="task-container">
            <ul>
                {tasks && tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;