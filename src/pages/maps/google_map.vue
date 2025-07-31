<template>
     <Breadcrumbs main="Mapas" title="Mapas Google"/>
          <div class="container-fluid">
          <div class="row">
               <div class="col-xl-6 text-start">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Mapa em uma localização específica</h5><span>Exibir um mapa em uma localização e nível de zoom específicos.</span>
                  </div>
                  <div class="card-body">
                      <GoogleMap :center="{lat:20.5937, lng:78.9629}" :zoom="12" style="width: auto; height: 500px">
                     </GoogleMap>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 text-start">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Suporte multi-idioma</h5><span>Exibir um mapa com rótulos em um idioma estrangeiro</span>
                  </div>
                  <div class="card-body">
                    <GoogleMap :center="{lat:20.5937, lng:78.9629}" :zoom="6" style="width: auto; height: 500px"
                      :options="{
                          region: 'VI',
                          language: 'vi',
                      }"
                    >
                    </GoogleMap>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 text-start">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Marcador no Mapa</h5><span>Exibir um mapa destacando pontos de interesse</span>
                  </div>
                  <div class="card-body">
                    <Markers></Markers>
                  </div>
                </div>
              </div> 
              <div class="col-xl-6 text-start">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Marcador Arrastável</h5><span>Exibir um mapa destacando pontos de interesse</span>
                  </div>
                  <div class="card-body">
                    <DraggableMarker></DraggableMarker>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 text-start">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Polilinha no Mapa</h5><span>Exibir um mapa com uma linha mostrando uma rota conhecida</span>
                  </div>
                  <div class="card-body">
                    <GooglePolyline></GooglePolyline>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 text-start">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Polígono no Mapa</h5><span>Exibir um mapa destacando uma região ou área</span>
                  </div>
                  <div class="card-body">
                    <TrianglePolygon></TrianglePolygon>
                  </div>
                </div>
              </div>
          </div>
          </div>
</template>
<script>
import { GoogleMap } from "vue3-google-map";
import Markers from "./maps/markersPage.vue"
import DraggableMarker from "./maps/draggableMarker.vue"
import GooglePolyline from "./maps/polylinePage.vue"
import TrianglePolygon from "./maps/triangle_polyline.vue"
export default {
    components:{
        GoogleMap,Markers,DraggableMarker,GooglePolyline,TrianglePolygon
    },
}
</script>