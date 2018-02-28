import { LancamentosUiPage } from './app.po';

describe('lancamentos-ui App', () => {
  let page: LancamentosUiPage;

  beforeEach(() => {
    page = new LancamentosUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
