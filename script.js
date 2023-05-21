async function buscarEndereco(cep) {
  try {
    const endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const converterEndereco = await endereco.json();
    if (converterEndereco.erro) {
      throw Error("Cep não existe!");
    } else {
      let logradouro = document.getElementById("endereco");
      let bairro = document.getElementById("bairro");
      let localidade = document.getElementById("cidade");
      let uf = document.getElementById("estado");

      logradouro.value = converterEndereco.logradouro;
      bairro.value = converterEndereco.bairro;
      localidade.value = converterEndereco.localidade;
      uf.value = converterEndereco.uf;
      console.log(converterEndereco);
      return converterEndereco;
    }
  } catch {
    console.log(erro);
  }
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscarEndereco(cep.value));

// UF = uf
