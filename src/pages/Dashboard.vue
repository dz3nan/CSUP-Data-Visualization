<template>
    <weather 
        api-key="b5675b6c7ebb80321e7505c79749fe66"
        title="Prognoza"
        latitude="42.442574"
        longitude="19.268646"
        language="sr"
        units="uk">
    </weather>
</template>
 
<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';
 
export default {
    components: {
        'weather': VueWeatherWidget
    },
}
</script>