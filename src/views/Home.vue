<template>
  <div>
    <h1>Teste de Componente VUEJS</h1>

    <componente-customizado last-name="Souza">
      <template v-slot:midle>
        {{user}} To Dentro
      </template>

      <template v-slot:footer="props">
        To no Final Cambadaaaa!!!!!
        <div>
          {{props.user}}
        </div>
      </template>
    </componente-customizado>
  </div>
</template>

<script>
import ComponenteCustomizado from '../components/ComponenteCustomizado'
export default {
  components: {
    ComponenteCustomizado
  },
  data: () => ({
    user: 'Udson'
  })
}
</script>
