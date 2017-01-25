import { RecruitmentSystemPage } from './app.po';

describe('recruitment-system App', function() {
  let page: RecruitmentSystemPage;

  beforeEach(() => {
    page = new RecruitmentSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
