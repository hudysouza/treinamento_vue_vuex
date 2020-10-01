<template>
  <v-app>
    <v-navigation-drawer permanent app>
      <v-toolbar flat>
        <v-list>
          <v-list-item>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-item v-for="item in items" :key="item.key" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <div class="d-flex align-center">
        <h3>Treinamento VUEX</h3>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    items: [
      { key: 0, label: 'Eita', icon: 'mdi-star', to: '/' },
      { key: 1, label: 'Pessoa', icon: 'mdi-star', to: '/pessoa' },
      { key: 2, label: 'Nova Pessoa', icon: 'mdi-star', to: '/novapessoa' }
    ]
  })
}
</script>
