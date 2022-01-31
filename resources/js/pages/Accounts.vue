<template>
  <b-container fluid>
      <b-row class="mt-4">
          <b-col class="col-12 p-2 d-flex flex-row justify-content-end align-items-center">
              <button class="btn btn-success btn-sm m-1" v-b-modal.addstock> Add Stock</button>
              <button class="btn btn-secondary btn-sm m-1">Add user</button>
          </b-col>
      </b-row>
      <hr>

      <b-row class="p-4" style="background-color:rgb(37, 36, 36)">
          <b-col class="col-6">
              <form action="" method="post">
                
                 <b-input type="number" placeholder="Investiment Amount" min="0" value="2"/>
                 <b-button class="btn btn-success btn-md mt-1">Invest</b-button>
              </form>
          </b-col>
          <b-col class="col-6">
              <form action="" method="post">
                
                 <b-input type="number" placeholder="WithDraw Amount" min="0" max="5"/>
                 <b-button class="btn btn-danger btn-md mt-1">WithDraw</b-button>
              </form>
          </b-col>
      </b-row>

<!--MODEL-->
<b-modal id="addstock" title="ADD STOCK">
    <b-form>
        <b-input class="form-control mt-2" type="text" placeholder="Item"/>
        <select class="form-control mt-2">
            <option>Credit</option>
             <option>Debt</option>

        </select>

        <b-input class="mt-2" type="number" placeholder="Stock amount" min="0"/>

       <b-button class="btn btn-md btn-warning mt-2" variant="">Add Stock</b-button>
    </b-form>

</b-modal>





  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>