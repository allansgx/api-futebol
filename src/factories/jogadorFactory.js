// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker')

const jogadorFactory = (timeId, paisId) => {
  return {
    nome: faker.person.fullName({ sex: 'male' }),
    timeId: timeId,
    paisId: paisId,
    overall: faker.number.int({ min: 70, max: 95 }),
    foto: 'https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1',
  };
};

module.exports = jogadorFactory;