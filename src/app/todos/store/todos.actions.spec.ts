import * as fromTodo from './todos.actions';

describe('loadTodos', () => {
  it('should return an action', () => {
    expect(fromTodo.loadTodos().type).toBe('[Todo] Load Todos');
  });
});
