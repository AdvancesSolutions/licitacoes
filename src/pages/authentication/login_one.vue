<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-xl-7 b-center bg-size" :style="{ backgroundImage: 'url('+ require('../../assets/images/login/2.jpg') +')' }" style="background-size: cover; background-position: center center; display: block;">
            <img class="bg-img-cover bg-center" src="../../assets/images/login/2.jpg" alt="looginpage" style="display: none;" />
        </div>
        <div class="col-xl-5 p-0">
            <div class="login-card">
                <div>
                    <div>
                        <a class="logo text-start">
                            <img class="img-fluid for-light" src="../../assets/images/logo/logo.png" alt="looginpage" />
                            <img class="img-fluid for-dark" src="../../assets/images/logo/logo_dark.png" alt="looginpage" />
                        </a>
                    </div>
                    <div class="login-main ">
                        <form class="theme-form" >
                            <h4>Entrar na conta</h4>
                            <p>Digite seu email e senha para fazer login</p>
                            <div class="form-group">
                                <label class="col-form-label">Endereço de Email</label>
                                <input class="form-control" type="email" required="" placeholder="Test@gmail.com" />
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Senha</label>
                                <div class="form-input position-relative">
                                    <input class="form-control" :type="active?'password':'text'" name="login[password]"  required="" placeholder="*********" />
                                    <div class="show-hide"><span :class="active?'show':'hide'"  @click.prevent="show"></span></div>
                                </div>
                            </div>
                            <div class="form-group mb-0">
                                <div class="checkbox p-0">
                                    <input id="checkbox1" type="checkbox" />
                                    <label class="text-muted" for="checkbox1">Lembrar senha</label>
                                </div>
                                <router-link to="/">  
                                <button class="btn btn-primary btn-block w-100">
                                Entrar 
                                 </button></router-link>
                            </div>
                            <h6 class="text-muted mt-4 or">Ou entre com</h6>
                            <div class="social mt-4">
                                <div class="btn-showcase"><a class="btn btn-light" href="#" ><vue-feather class="txt-linkedin" type="linkedin"></vue-feather> LinkedIn </a><a class="btn btn-light" href="#" ><vue-feather class="txt-twitter" type="twitter"></vue-feather>twitter</a><a class="btn btn-light" href="#" ><vue-feather class="txt-fb" type="facebook"></vue-feather>facebook</a></div>
                              </div>
                            <p class="mt-4 mb-0 text-center">
                                Não tem uma conta?
                                <router-link class="ms-2" tag="a" to="/auth/register">
                                    Criar Conta
                                </router-link>
                            </p>
                        </form>
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
