import axios from 'axios'

export default {
  buscarPessoa ({ commit }, id) {
    axios.get(`http://localhost:3000/api/pessoa/${id}`).then(ret => {
      commit('alterarPessoa', ret.data)
    })
  },
  criarPessoa ({ commit, state }) {
    axios.post('http://localhost:3000/api/pessoa', state.pessoa).then(ret => {
      commit('alterarPessoa', ret.data)
    })
  },
  alterarPessoa ({ commit, state }, id) {
    axios.put(`http://localhost:3000/api/pessoa/${id}`, state.pessoa).then(ret => {
      commit('alterarPessoa', ret.data)
    })
  },
  buscarPessoas ({ commit }) {
    axios.get('http://localhost:3000/api/pessoa').then(ret => {
      commit('alterarPessoas', ret.data)
    })
  },
  deletarPessoa ({ dispatch }, pessoa) {
    axios.delete(`http://localhost:3000/api/pessoa/${pessoa.id}`).then(() => {
      dispatch('buscarPessoas')
    })
  }
}
