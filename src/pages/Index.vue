<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
      style="background-image:url('public/img/singleColor.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
       <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">

                    <h1 class="klasaFont">UDG  </h1>
                                        <h1 class="klasaFont">WEATHER FORECAST </h1>



                </div>
          <div >


            </div>
        </div>
       
      </div>
    </div>

            </div>
</template>
<script>
import { Parallax } from '../components';


export default {
  name: 'index',
   data() {
      return {
        slide: 0,
        sliding: null,
        collorOnScroll: 0,
        backgroundColor: 'black'
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
  },
  bodyClass: 'index-page',
   components: {  
      Parallax, 
          }
};


</script>
<style >

#klasaFont {
font-weight: bold;
font-size: 50px; 
 font-family: Arial, Helvetica, sans-serif;
}



@-webkit-keyframes move
{
    from {
        left: 0;
    }
    to {
        left: 50%;
    }
}
@keyframes move
{
    from {
        left: 0;
    }
    to {
        left: 50%;
    }
}






</style>
