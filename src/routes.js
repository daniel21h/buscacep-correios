const PostOffices = require('node-correios')

module.exports = {
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