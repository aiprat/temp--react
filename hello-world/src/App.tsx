import { FunctionComponent } from 'react';
import { createTodoList } from './elements/createTodoList';
import { Header } from './layout/Header';
import { Todo } from './domain/Todo';
import { VerticalStack } from './layout/VerticalStack';

const App: FunctionComponent = function () {
  const title = 'TODOs';
  const todoList = createTodoList();

  todoList.note({ description: 'Show all these todos' });
  todoList.note({ description: 'Have lunch' });
  todoList.note({ description: 'Make todos editable' });

  return (
    <div>
      <Header title={ title } />
      <VerticalStack>
        {
          todoList.getAllTodos().map(todo => (
            <Todo key={ todo.id } id={ todo.id } description={ todo.description } />
          ))
        }
      </VerticalStack>
    </div>
  );
};

export { App };
