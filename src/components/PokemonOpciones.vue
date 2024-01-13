<template>
  
  <!--ejemplo hacer 4 opciones-->

  <div class="options-container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>

  </div>
  
</template>

<script>
export default {

}
</script>

<style>

  ul{
    list-style-type: none;
  }

  li{
    background: rgb(195, 153, 253);
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    width: 250px;
    margin-bottom: 10px;/**margen solo abajo  de cada literal*/ 
    cursor: pointer;
  }

  li:hover{
    background-color: rgba(145, 198, 255, 0.1);
  }

.options-container{
  display: flex;
  justify-content: center;
}
</style>