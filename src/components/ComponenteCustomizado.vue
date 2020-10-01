<template>
  <div>
    Meu Componente

    <div>
      <slot name="midle">Não Tem Nada</slot>
    </div>

    <v-text-field box label="label" v-model="user"></v-text-field>

    <div style="margin-top: 200px;">
      <slot name="footer" v-bind:user="user">
        Final Cambada
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Componente Vuejs',
  props: {
    lastName: String
  },
  data: () => ({
    user: ''
  })
}
</script>
