<template>
    <div class="faq-title"> <h6>Contas de Usuário</h6></div>
                     <div class="card">
                       <div class="card-header">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon13" aria-expanded="false" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle" ><vue-feather type="help-circle" ></vue-feather>Integrando WordPress com seu Site ?</button>
                         </h5>
                       </div>
                       <div class="collapse" id="collapseicon13" aria-labelledby="collapseicon13" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                         <div class="card-body">  <p>{{lorem}}</p></div>
                       </div>
                     </div>
                     <div class="card">
                       <div class="card-header">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon14" aria-expanded="false" aria-controls="collapseicon2" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle" ><vue-feather type="help-circle"></vue-feather>Manutenção do Site WordPress ?</button>
                         </h5>
                       </div>
                       <div class="collapse" id="collapseicon14" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                         <div class="card-body"><p>{{lorem}}</p> </div>
                       </div>
                     </div>
                     <div class="card">
                       <div class="card-header">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon16" aria-expanded="false" aria-controls="collapseicon2" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle" ><vue-feather type="help-circle"></vue-feather> WordPress em Seu Idioma ?</button>
                         </h5>
                       </div>
                       <div class="collapse" id="collapseicon16" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                         <div class="card-body"><p>{{lorem}}</p></div>
                       </div>
                     </div>
                     <div class="card">
                       <div class="card-header">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon17" aria-expanded="false" aria-controls="collapseicon2" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle" ><vue-feather type="help-circle"></vue-feather>  Validando um Site ?</button>
                         </h5>
                       </div>
                       <div class="collapse" id="collapseicon17" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                         <div class="card-body"><p>{{lorem}}</p> </div>
                       </div>
                     </div>
                     <div class="card">
                       <div class="card-header">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon18" aria-expanded="false" aria-controls="collapseicon2" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle" ><vue-feather type="help-circle"></vue-feather>Meta Tags no WordPress ?</button>
                         </h5>
                       </div>
                       <div class="collapse" id="collapseicon18" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                         <div class="card-body"><p>{{lorem}}</p>  </div>
                       </div>
                     </div>
</template>
<script>
export default {
 components:{  
 },
 data(){
   return{
      isActive: false,
      lorem:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
   }
 },
  methods: {
toggle() {
     this.isActive = !this.isActive
   },
  }
}
</script>