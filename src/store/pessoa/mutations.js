export default {
  alterarPessoa (state, data) {
    state.pessoa = data
  },
  novaPessoa (state) {
    state.pessoa = {
      firstname: '',
      lastName: '',
      email: ''
    }
  }
}
