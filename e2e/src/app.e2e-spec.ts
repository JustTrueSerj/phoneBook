import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('', () => {
  let page: AppPage;


  beforeEach(() => {
    page = new AppPage();
  });

  it('Корректное добавление записи', async () => {
    page.navigateTo();
    element(by.id('surname')).sendKeys('Surname');
    element(by.id('phoneNumber')).sendKeys('0000000000');
    expect(element(by.className('submitButton')).isEnabled()).toBeTruthy();
    element(by.className('submitButton')).click().then(() => {
      expect(element(by.id('surname')).getText()).toEqual('');
      expect(element(by.id('phoneNumber')).getText()).toEqual('');

      const lastRecordAddition = element.all(by.id('record_Surname_+70000000000'));
      expect(lastRecordAddition.getText()).toEqual([`☆\nSurname\n+7 (000) 000 - 0000\n✘`]);
    });
  });

  it('Корректное отображение избранного', async () => {
    page.navigateTo();
    element(by.id('surname')).sendKeys('Surname');
    element(by.id('phoneNumber')).sendKeys('0000000000');
    expect(element(by.className('submitButton')).isEnabled()).toBeTruthy();
    element(by.className('submitButton')).click().then(() => {
      expect(element(by.id('surname')).getText()).toEqual('');
      expect(element(by.id('phoneNumber')).getText()).toEqual('');

      const lastRecordAddition = element.all(by.id('record_Surname_+70000000000'));
      expect(lastRecordAddition.getText()).toEqual([`☆\nSurname\n+7 (000) 000 - 0000\n✘`]);
      element.all(by.className('star')).click().then(() => {
        expect(lastRecordAddition.getText()).toEqual([`★\nSurname\n+7 (000) 000 - 0000\n✘`]);
      });
      element.all(by.className('star')).click().then(() => {
        expect(lastRecordAddition.getText()).toEqual([`☆\nSurname\n+7 (000) 000 - 0000\n✘`]);
      });
    });
  });

  it('Корректное удаление записи', async () => {
    page.navigateTo();
    element(by.id('surname')).sendKeys('Surname');
    element(by.id('phoneNumber')).sendKeys('0000000000');
    expect(element(by.className('submitButton')).isEnabled()).toBeTruthy();
    element(by.className('submitButton')).click().then(() => {
      expect(element(by.id('surname')).getText()).toEqual('');
      expect(element(by.id('phoneNumber')).getText()).toEqual('');

      const lastRecordAddition = element.all(by.id('record_Surname_+70000000000'));
      expect(lastRecordAddition.getText()).toEqual([`☆\nSurname\n+7 (000) 000 - 0000\n✘`]);
      element.all(by.className('removeButton')).click().then(() => {
        expect(lastRecordAddition).toEqual([]);
      });
    });
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
