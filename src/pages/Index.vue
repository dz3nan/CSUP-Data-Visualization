<template>
  <div style="background-image:url('public/img/udgColor.jpg')">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
            <h1 class="klasaFont">UDG WEATHER FORECAST</h1>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>

      <div class="row">
        <div class="col-sm">
          <temperatura />
        </div>
        <div class="col-sm">
          <vlaznost />
        </div>
        <div class="col-sm">
          <vjetar />
        </div>
        <div class="col-sm">
          <padavina />
        </div>
        <div class="col-sm">
          <smjerVjetra />
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <apexchart width="600" type="bar" :options="options" :series="series"></apexchart>
        </div>
          <div class="col-sm">
          <apexchart width="600" type="line" :options="options" :series="series"></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../http-common";

export default {
  name: "index",
  data() {
    return {
      slide: 0,
      sliding: null,
      collorOnScroll: 0,
      backgroundColor: "black",
      sensor_1_val: "",
      sensor_2_val: "",
      sensor_3_val: "",
      sensors: [],
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  bodyClass: "index-page",
  components: {}
};
</script>
<style >
.klasaFont {
  font-weight: bold;
  font-size: 35px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom:30px;
  color: white;
  white-space: nowrap;
}

@-webkit-keyframes move {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}
@keyframes move {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}
</style>
