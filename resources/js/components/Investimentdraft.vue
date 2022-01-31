<template>
<b-container fluid>
    <b-row>
        <b-col class="col-12">
   <b-table striped hover :items="items"></b-table>
   </b-col>
   </b-row>
   </b-container>
</template>
<script>
export default {
    data() {
        return {
           items: [
          { Date: 40, Type: 'Dickerson', Amount: 'Macdonald',Balance: 'Macdonald' },
          { Date: 40, Type: 'Dickerson', Amount: 'Macdonald',Balance: 'Macdonald' },
          { Date: 40, Type: 'Dickerson', Amount: 'Macdonald',Balance: 'Macdonald' },
          {Date: 40, Type: 'Dickerson', Amount: 'Macdonald',Balance: 'Macdonald' }
        ]
        }
    },
}
</script>