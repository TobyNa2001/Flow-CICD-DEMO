import { Test-CICDTemplatePage } from './app.po';

describe('Test-CICD App', function() {
  let page: Test-CICDTemplatePage;

  beforeEach(() => {
    page = new Test-CICDTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
