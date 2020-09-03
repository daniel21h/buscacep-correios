const PostOffices = require('node-correios')

module.exports = {
  // Retorna dados tratados
  async index (request, response) {
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
  },

  // Retorna todos os dados vindos da API
  async create (request, response) {
    const { cep } = request.body

    const postOffices = new PostOffices()

    const postResponse = await postOffices.consultaCEP({ cep })

    return response.json(postResponse)
  }
}