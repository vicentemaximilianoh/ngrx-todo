import { todosReducer, todosInitialState } from './todos.reducer';

describe('Todo Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = todosReducer(todosInitialState, action);

      expect(result).toBe(todosInitialState);
    });
  });
});
