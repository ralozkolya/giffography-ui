import { GiffographyNgPage } from './app.po';

describe('giffography-ng App', () => {
  let page: GiffographyNgPage;

  beforeEach(() => {
    page = new GiffographyNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
