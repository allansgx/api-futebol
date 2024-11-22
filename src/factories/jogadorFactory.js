// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker')

const jogadorFactory = (timeId, paisId) => {
  const posicoes = ['ATA', 'PD', 'PE', 'MEI', 'MC', 'ME', 'MD', 'ZAG', 'LE', 'LD', 'GL']

  return {
    nome: faker.person.fullName({ sex: 'male' }),
    posicao: posicoes[faker.number.int({ min: 0, max: 10 })],
    timeId: timeId,
    paisId: paisId,
    overall: faker.number.int({ min: 70, max: 95 }),
    foto: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
  };
};

module.exports = jogadorFactory;