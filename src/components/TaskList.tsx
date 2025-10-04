import {useState, useEffect } from 'react';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

function TaskList(){

    // defining states
    const [ tasks, setTasks ] = useState<Task[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchTasks = async () => {
            try{
                // fetching the data from an API
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                
                // handling network response
                if(!response.ok){
                    throw new Error('Network response was not OK.');
                }

                const data = await response.json();
                setTasks(data);
            }catch(error){
                console.error("Failed to load tasks", error);
                setError("Failed to load tasks");
            }finally{
                setIsLoading(false);
            }
        }

        fetchTasks();
    }, []);

    if(isLoading){
        return <h2>Loading....</h2>
    };

    if(error){
        return <p style={{color: 'red'}}>{error}</p>
    };

    return (
        <div className="task-container">
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;