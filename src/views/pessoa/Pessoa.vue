<template>
  <div class="mx-auto">
      <v-data-table
    :headers="headers"
    :items="pessoas"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deletarPessoa(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    headers: [
      { text: 'ID', value: 'id' },
      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'firstName'
      },
      { text: 'Sobrenome', value: 'lastName' },
      { text: 'Email', value: 'email' },
      { text: 'Actions', value: 'actions', sortable: false }
    ]
  }),
  computed: {
    ...mapGetters({ pessoas: 'pessoas/getPessoas' })
  },
  methods: {
    ...mapActions({ deletarPessoa: 'pessoas/deletarPessoa' }),
    editItem (item) {
      this.$router.push(`/editarpessoa/${item.id}`)
    }
  },
  beforeMount () {
    this.$store.dispatch('pessoas/buscarPessoas')
  }
}
</script>
