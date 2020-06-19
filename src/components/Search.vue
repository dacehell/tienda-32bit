<template>

    <div>
        <!-- <p>

        <input type="text" placeholder="Buscar por id" v-model="code" @keyup.enter="search">
        <button @click="search" class="btn btn-danger btn-search">Buscar</button>
        </p> -->
        <form>
      <div class="form-row justify-content-center">
        <div class="col-sm-3 my-1">
          <label class="sr-only" for="inlineFormInputName"></label>
          <input type="text" class="form-control" id="inlineFormInputName" v-model="code" @keyup.enter="search"/>
        </div>
        <div class="col-auto my-1">
          <button @click.prevent="search" class="btn btn-danger btn-search">Buscar</button>
        </div>
      </div>
    </form>

        <p>
            Numero de juegos Disponible:
            <span>{{this.countAvailable}}</span>
        </p>
        <p>
            cantidad de juegos totales:
            <span>{{this.sumTotal}}</span>
        </p>
        <p>
            Listado de juegos </p>
            
               <!-- <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Code</th>
          <th class="text-left">Name</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Price</th>
        </tr>
      </thead>
      <tbody v-if="show">
        <tr v-for="(product, index) in stockGame" :key="index" :style="{background: product.color }">
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.price }}</td> 
        </tr>
      </tbody>
      <tbody v-else>
                <tr :style="{background: this.table.color}">
                <td v-text="this.table.code"></td>
                <td v-text="this.table.name"></td>
                <td v-text="this.table.stock"></td>
                <td v-text="this.table.price"></td>
                <td v-text="this.table.featured"></td>
                </tr>
            </tbody>
    </template>
  </v-simple-table> -->
  <table class="table">
            <tbody v-if="showResult">
                <tr v-for="(product, index) in stockGame" :key='index' :style="{background: product.color }">
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.price }}</td> 
                <td>{{ product.featured }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr :style="{background: this.result.color}">
                <td v-text="this.result.code"></td>
                <td v-text="this.result.name"></td>
                <td v-text="this.result.stock"></td>
                <td v-text="this.result.price"></td>
                <td v-text="this.result.featured"></td>
                </tr>
            </tbody>
        </table>
           
        
    </div>
</template>


<script>
import { mapGetters }   from 'vuex'
export default {
    data() {
        return {
            code: '',
            showResult: true,
            result: ''
            // search: '',
            // games: '',
           
        }
    },
    methods: {
      search() {
        let result = this.byId(this.code)
        this.showResult = false
        this.result = result
      }
    },
        computed: {
            ...mapGetters(['countAvailable', 'sumTotal', 'byId', 'stockGame'])
        }
    
}
</script>
