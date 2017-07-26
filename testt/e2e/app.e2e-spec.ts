import { TesttPage } from './app.po';

describe('testt App', () => {
  let page: TesttPage;

  beforeEach(() => {
    page = new TesttPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
