const PostOffices = require('node-correios')

class SearchCepController {
  // Retorna todos os dados vindos da API
  async index (request, response) {
    const { cep } = request.body

    const postOffices = new PostOffices()

    const postResponse = await postOffices.consultaCEP({ cep })

    return response.json(postResponse)
  }
  
  // Garimpando dados para serem salvos
  async create (request, response) {
    const { cep } = request.body

    const postOffices = new PostOffices()

    const postResponse = await postOffices.consultaCEP({ cep })

    const responseCep = {
      cep,
      address: postResponse.logradouro,
      neighborhood: postResponse.bairro,
      location: postResponse.localidade,
      uf: postResponse.uf
    }

    return response.json(responseCep)
  }
}

module.exports = SearchCepController