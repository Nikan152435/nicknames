import Validator from '../app';

test.each([
  ['правильный вариант', 'Nikan_23-09-05-warrior', true],
  ['неправильный вариант-кириллица', 'Никан_207-10-2023-warrior', false],
  ['неправильный вариант-4 цифры подряд', 'Никан_20-09-2023-warrior', false],
  ['неправильный вариант-цифра(символ) в начале имени', '2Nikan_23-08-05-warrior', false],
  ['неправильный вариант-цифра(символ) в конце имени', 'Nikan_23-01-05-warrior-', false],
])(
  ('проверка имени вариант %s при %i'),
  (_, name, expected) => {
    const user = new Validator(name);
    const check = user.validateUsername();
    expect(check).toBe(expected);
  },
);