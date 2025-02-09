
// can be used via import from many classes
export interface Task{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskData
{
    title: string;
    summary: string;
    date: string;
}