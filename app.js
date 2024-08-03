const bcrypt = require('bcrypt');

async function generateHash(secret) {
  const saltRounds = 10; // Ajuste o número de rounds de salt conforme necessário
  const hash = await bcrypt.hash(secret, saltRounds);
  return hash;
}

async function verifyHash(secret, hash) {
  const match = await bcrypt.compare(secret, hash);
  return match;
}

// Exemplo de uso
(async () => {
  const secret = 'mySuperSecretValue'; // O valor secreto que você deseja hashear
  const hash = await generateHash(secret);
  console.log(`Generated hash: ${hash}`);

  const isMatch = await verifyHash(secret, hash);
  console.log(`Do the secret and hash match? ${isMatch}`);
})();
