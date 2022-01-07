<template>
<b-container fluid>

    <b-row>
        <ul class="col-12 d-flex flex-row justify-content-around aligh-items-center">
            <li>Investiment Capital: 100 USD</li>
            <li>WithDraw: 0 USD</li>
            <li>Balance: 130 USD</li>
        </ul>
    </b-row>

    <b-row class="mt-5">
        <b-col class="col-12 d-flex flex-row justify-content-around align-items-center" >
            <div class="pill col-3" style=" background-color: rgb(24, 98, 218);">
                <h5>Current Capital</h5>
                <p>50 USD</p>
            </div>
             <div class="pill col-3" style=" background-color: rgb(230, 121, 19);">
                <h5>Stock Capital</h5>
                <p>50 USD</p>
            </div>
             <div class="pill col-3" style=" background-color: rgb(20, 117, 28);">
                <h5>Profits</h5>
                <p>30 USD</p>
            </div>
        </b-col>
    </b-row>
  

</b-container>

</template>
<script>
export default {
    data() {
        return {
           
        }
    },
}
</script>


<style>
 .pill{
     border-radius: 10px;
    
     color: white;
 }
</style>