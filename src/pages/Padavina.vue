<template>
<div > 
<div class="card" >
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../../public/img/rainfall.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="../../public/img/rainfall.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Padavina {{sensor_1_val}} mm</p>
        <p class="subtitle is-6"></p>
      </div>
    </div>

  </div>
</div>
</div>
</template>

<script>
import http from "../http-common";

export default {
    name: 'Vlaznost',
      data() {
        return {
  sensor_1_val: "",
      sensor_2_val: "",
      sensors: [],
      datum: "",
       polling: null,
      datePooling: null
        }
      },
      methods: {
    searchSensors() {
      http
        .get(
   "/measurement_by_date/?node_id=5&start_date=" +
            this.datum +
            "&end_date=" +
            this.datum        )
        .then(response => {
          this.sensors = response.data; // JSON are parsed automatically.
          this.sensors = JSON.parse(JSON.stringify(this.sensors));
          var parsedobj = JSON.parse(JSON.stringify(this.sensors));

          for (var i = 0; i < parsedobj.data.length; i++) {
            var obj = parsedobj.data[i];
            this.sensor_1_val = Number(Number(obj.sensor_1_val).toFixed(1));
            this.sensor_2_val = Number(Number(obj.sensor_2_val).toFixed(1));
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
   created() {
  const today = new Date();
      const date =  today.getDate() + "/" +  (today.getMonth() + 1) +  "/" + today.getFullYear();
      this.datum = date; },
 mounted: function() {
    this.searchSensors();
     this.polling= setInterval(() => {
    this.searchSensors();
    }, 900000);

      this.datePooling =setInterval(() => {
       const today = new Date();
       const date =  today.getDate() + "/" +  (today.getMonth() + 1) +  "/" + today.getFullYear();
      this.datum = date; 
    }, 86400000);
  },
  beforeDestroy () {
  clearInterval(this.polling)
  clearInterval(this.datePooling)
},
}
</script>
<style scoped>

</style>