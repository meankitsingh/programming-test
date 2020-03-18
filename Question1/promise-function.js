const f = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject(new Error('firstName is required'));
      const fullName = `${firstName} Smith`;
      resolve(fullName);
    }, 2000);
  });
};

f('Andrew').then(console.log);

f().catch(console.log);