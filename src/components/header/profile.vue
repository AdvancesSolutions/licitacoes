<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10"
        src="@/assets/images/dashboard/profile.png"
        alt=""
      />
      <div class="media-body">
        <span>Emay Walter</span>
        <p class="mb-0 font-roboto">
          Administrador <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <router-link :to="'/users/profile'"><vue-feather type="user"></vue-feather><span>Conta </span></router-link>
      </li>
      <li>
        <router-link :to="'/email/readMail'"><vue-feather type="mail"></vue-feather><span>Caixa de Entrada</span></router-link>
      </li>
      <li>
        <router-link :to="'/app/task'"><vue-feather type="file-text"></vue-feather><span>Quadro de Tarefas</span></router-link>
      </li>
      <li>
        <router-link :to="'/pages/search'"><vue-feather type="settings"></vue-feather><span>Configurações</span></router-link>
      </li>
      <li>
        <a @click="logout"
          ><vue-feather type="log-in"></vue-feather><span>Sair</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>

  export default {
    name: 'Profile',
    methods: {
      logout: function() {
            this.$router.replace('/auth/login');
            localStorage.removeItem('User')
          }
    },
  };
</script>
