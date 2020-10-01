<template>
  <v-container grid-list-xs>
    <div style="max-width: 500px;" class="mx-auto">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="pessoa.firstName" :counter="50" :rules="nameRules" label="Nome" required></v-text-field>
        <v-text-field v-model="pessoa.lastName" :counter="50" :rules="nameRules" label="Sobrenome" required></v-text-field>
        <v-text-field v-model="pessoa.email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">{{nomebutao}}</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Resetar</v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    nomebutao: {
      type: String,
      required: false,
      default: 'Editar'
    }
  },
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    checkbox: false
  }),
  computed: {
    ...mapState({
      pessoa: state => state.pessoas.pessoa
    })
  },
  methods: {
    validate () {
      this.$emit('clicou')
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
