import {favoriteRecords, notFavoriteRecords, selectRecords} from './record.selector';

const RECORDS = [
  {
    id: -1,
    phoneNumber: '+70000000000',
    name: '',
    surname: 'Фамилия',
    patronymic: '',
    isFavorite: false
  },
  {
    id: 0,
    phoneNumber: '+70000000000',
    name: '',
    surname: 'Фамилия1',
    patronymic: '',
    isFavorite: false
  },
  {
    id: 1,
    phoneNumber: '+70000000000',
    name: '',
    surname: 'Фамилия2',
    patronymic: '',
    isFavorite: true
  },
  {
    id: 2,
    phoneNumber: '+70000000000',
    name: '',
    surname: 'Фамилия',
    patronymic: '',
    isFavorite: true
  }
];

describe('RecordSelector', () => {
  it('Сортировка массивов - массив избранных', () => {
    expect(favoriteRecords.projector(RECORDS)).toEqual([RECORDS[2], RECORDS[3]], [RECORDS[0], RECORDS[1]]);
  });

  it('Сортировка массивов - массив обычных пользователей', () => {
    expect(notFavoriteRecords.projector(RECORDS)).toEqual([RECORDS[0], RECORDS[1]], [RECORDS[2], RECORDS[3]]);
  });

  it('Селектор возвращает сортированный по isFavorite поток', () => {
    expect(selectRecords.projector(favoriteRecords.projector(RECORDS), notFavoriteRecords.projector(RECORDS)))
      .toEqual([RECORDS[2], RECORDS[3], RECORDS[0], RECORDS[1]]);
  });
});

