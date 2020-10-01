<template>
  <pessoa nomebutao="Nova Pessoa" @clicou="salvar"/>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  components: {
    Pessoa: () => import('@/components/Pessoa.vue')
  },
  methods: {
    ...mapMutations(['novaPessoa']),
    ...mapActions({
      salvar: 'pessoas/criarPessoa'
    })
  },
  beforeMount () {
    this.novaPessoa()
  }
}
</script>
