function generarUrl() {
  let combinaciones = [];

  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const url = [".com", ".org"];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let u of url) {
          combinaciones.push(`${p} ${a} ${n} ${u}`);
        }
      }
    }
  }

  return console.log(combinaciones);
}
generarUrl();
