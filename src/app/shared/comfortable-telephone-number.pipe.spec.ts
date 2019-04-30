import {ComfortableTelephoneNumberPipe} from './comfortable-telephone-number.pipe';

describe('ComfortableTelephoneNumberPipe', () => {
  it('Пайп существует', () => {
    const pipe = new ComfortableTelephoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
  it('Пайп корректно трансформирует телефон в более комфортный вид записи', () => {
    const pipe = new ComfortableTelephoneNumberPipe();
    expect(pipe.transform('+79000000000')).toEqual('+7 (900) 000 - 0000');
  });
});

