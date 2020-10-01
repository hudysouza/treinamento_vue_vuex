<template>
  <pessoa nomebutao="Salvar" @clicou="salvar"/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
    Pessoa: () => import('@/components/Pessoa.vue')
  },
  methods: {
    ...mapActions({
      alterarPessoa: 'pessoas/alterarPessoa',
      buscarPessoa: 'pessoas/buscarPessoa'
    }),
    salvar () {
      this.alterarPessoa(this.$route.params.id)
    }
  },
  beforeMount () {
    this.buscarPessoa(this.$route.params.id)
  }
}
</script>
