<template>
  <div class="customizer-header">
    <i class="icofont-close icon-close" @click="closecustomizer()"></i>
    <h5>Configurações de Visualização</h5>
    <p class="mb-0">
      Experimente em Tempo Real <i class="fa fa-thumbs-o-up txt-primary"></i>
    </p>
    <button data-bs-toggle="modal" data-bs-target="#modal-customizer" class="btn btn-primary plus-popup mt-2">
      Configuração
    </button>
    <Teleport to="body">
      <div class="modal fade modal-bookmark" id="modal-customizer" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <header id="modal-customizer___BV_modal_header_" class="modal-header">
              <h5 id="modal-customizer___BV_modal_title_" class="modal-title">Título do Modal</h5><button type="button"
                aria-label="Close" data-bs-dismiss="modal" class="close">×</button>
            </header>
            <div class="modal-header modal-copy-header">
              <h5 class="headerTitle mb-0">Configuração do Personalizador</h5>
            </div>
            <div class="modal-body">
              <div class="config-popup">
                <p>
                  Para substituir nosso design pelo seu tema desejado. Por favor, faça
                  a configuração conforme mencionado
                </p>
                <p>
                  <b>Caminho : src > data > layout.json</b>
                </p>
                <div>
                  <pre>
                          <code>
                            <textarea :value="data" ref="layout" rows="1" v-bind:style="styleObject"/>
                            {{ layout }}
                          </code>
                        </pre>
                </div>
                <button class="btn btn-primary mt-2" @click="copyText()">
                  Copiar Json
                </button>
              </div>
            </div>
            <footer id="modal-customizer___BV_modal_footer_" class="modal-footer"><button type="button"
                class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button><button type="button"
                class="btn btn-primary" data-bs-dismiss="modal">OK</button></footer>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CustomizerConfiguration',
  data() {
    return {
      styleObject: {
        position: 'fixed',
        left: '0',
        top: '0',
        opacity: '0',
      },
    };
  },
  computed: {
    ...mapState({
      customizer: (state) => state.menu.customizer,
      data: (state) => JSON.stringify(state.layout.layout),
      layout: (state) => state.layout.layout,
    }),
  },
  methods: {
    closecustomizer() {
      this.$store.state.menu.customizer = '';
    },
    copyText() {
      this.$refs.layout.select();
      document.execCommand('copy');
      this.$toast.show('Código Copiado para a área de transferência', {
        theme: 'outline',
        position: 'top-right',
        type: 'default',
        duration: 2000,
      });
    },
  },
};
</script>
