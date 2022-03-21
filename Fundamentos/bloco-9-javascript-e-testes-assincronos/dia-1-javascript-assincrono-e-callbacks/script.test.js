const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('A função upperCase()', () => {
  it('Verifica se a palavra ficou em maiúscula', (done) => {
    const word = 'Palavra';

    uppercase(word, (result) => {
      try {
        expect(result).toBe('PALAVRA');
        done();
      } catch (err) {
        done(err)
      }
    })
  })
})