import { TasksServiceMock } from '../services/tests/tasks.service.mock';
import { CategoryNamePipe } from './category-name.pipe';

describe('CategoryNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CategoryNamePipe(new TasksServiceMock());
    expect(pipe).toBeTruthy();
  });
});
