<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <span class="logo-text-auth">advances</span>
                </a>
              </div>
              <div class="login-main">
                <form class="theme-form">
                  <h4>Criar sua conta</h4>
                  <p>Digite seus dados pessoais para criar a conta</p>
                  <div class="form-group">
                    <label class="col-form-label pt-0">Seu Nome</label>
                    <div class="row g-2">
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Nome"
                        />
                      </div>
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Sobrenome"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Endereço de Email</label>
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"
                    />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Senha</label>
                    <div class="form-input position-relative">
  
                      <input
                        class="form-control"
                        :type="active?'password':'text'"
                        name="login[password]"
                        required=""
                        placeholder="*********"
                      />
                      <div class="show-hide"><span :class="active?'show':'hide'" @click.prevent="show"> </span></div>
                      </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label class="text-muted" for="checkbox1"
                        >Concordo com a<a class="ms-2" href="#"
                          >Política de Privacidade</a
                        ></label
                      >
                    </div>
                    <button class="btn btn-primary btn-block" >
                      Criar Conta
                    </button>
                  </div>
                  <h6 class="text-muted mt-4 or">Ou cadastre-se com</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="#" ><vue-feather class="txt-linkedin" type="linkedin"></vue-feather> LinkedIn </a><a class="btn btn-light" href="#" ><vue-feather class="txt-twitter" type="twitter"></vue-feather>twitter</a><a class="btn btn-light" href="#" ><vue-feather class="txt-fb" type="facebook"></vue-feather>facebook</a></div>
                  </div>
                  <p class="mt-4 mb-0">
                    Já tem uma conta?
                    <router-link class="ms-2" tag="a" to="/auth/login">
                      Entrar
                    </router-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            active: true
        }
    },
    methods:{
        show(){
            this.active=!this.active
        }
    }
}
</script>

<style scoped>
.logo-text-auth {
  font-size: 28px;
  font-weight: 700;
  color: #7366ff;
  text-decoration: none;
  letter-spacing: 1px;
}

.logo-text-auth:hover {
  color: #5a4fcf;
  text-decoration: none;
}
</style>
