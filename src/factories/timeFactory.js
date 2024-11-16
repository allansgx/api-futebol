const faker = require('faker');

const timeFactory = (paisId) => {
  return {
    nome: faker.company.companyName(),
    paisId: paisId,
    foto: 'https://clubes.obmep.org.br/blog/wp-content/uploads/2013/02/Escudos2_maior.png',
  };
};

module.exports = timeFactory;