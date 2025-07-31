<template>
    <div class="col-sm-12 col-xl-6">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header pb-0">
                <h3>Formulário Mega</h3>
              </div>
              <div class="card-body">
                <form class="theme-form mega-form">
                  <h4>Informações da Conta</h4>
                  <div class="mb-3">
                                          <label class="col-form-label">Seu Nome</label>
                    <input class="form-control" type="text" placeholder="Seu Nome">
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Endereço de Email</label>
                    <input class="form-control" type="email" placeholder="Digite o email">
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Número de Contato</label>
                    <input class="form-control" type="Number" placeholder="Digite o número de contato">
                  </div>
                  <hr class="mt-4 mb-4">
                  <h4>Informações da Empresa</h4>
                  <div class="mb-3">
                    <label class="col-form-label">Nome da Empresa</label>
                    <input class="form-control" type="text" placeholder="Nome da Empresa">
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Website</label>
                    <input class="form-control" type="text" placeholder="Website">
                  </div>
                </form>
                <hr class="mt-4 mb-4">
                <h4 class="pb-3 mb-0">Informações de Cobrança</h4>
                <form class="form-space theme-form row">
                  <div class="col-auto">
                    <input class="form-control" type="text" placeholder="Nome no Cartão">
                  </div>
                  <div class="col-auto">
                    <input class="form-control" type="number" name="cardNumber" placeholder="Número do Cartão">
                  </div>
                  <div class="col-auto">
                    <input class="form-control" type="text" name="inputPassword" placeholder="Código Postal">
                  </div>
                </form>
              </div>
              <div class="card-footer text-end">
                <button class="btn btn-primary">Enviar</button>
                <button class="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header pb-0">
                <h3>Formulário Inline</h3><span>Use a classe<code>.form-inline</code>no formulário para estilizar com campos inline.</span>
              </div>
              <div class="card-body">
                <h4>Formulário Inline com Rótulo</h4>
                <form class="row theme-form mt-3">
                  <div class="col-xxl-4 mb-3 d-flex">
                    <label class="col-form-label pe-2" for="inputInlineUsername">Nome de Usuário</label>
                    <input class="form-control" id="inputInlineUsername" type="text" name="inputUsername" placeholder="Nome de Usuário" autocomplete="off">
                  </div>
                  <div class="col-xxl-4 mb-3 d-flex">
                    <label class="col-form-label pe-2" for="inputInlinePassword">Senha</label>
                    <input class="form-control" id="inputInlinePassword" type="password" name="inputPassword" placeholder="Senha" autocomplete="off">
                  </div>
                  <div class="col-xxl-4 mb-3 d-flex">
                    <button class="btn btn-primary">Entrar</button>
                  </div>
                </form>
                <h4>Formulário Inline sem Rótulo</h4>
                <form class="row row-cols-sm-3 theme-form mt-3 form-bottom">
                  <div class="mb-3 d-flex">
                    <input class="form-control" type="text" name="inputUnlabelUsername" placeholder="Nome de Usuário" autocomplete="off">
                  </div>
                  <div class="mb-3 d-flex">
                    <input class="form-control" id="inputUnlabelPassword" type="password" name="inputPassword" placeholder="Senha" autocomplete="off">
                  </div>
                  <div class="mb-3 d-flex">
                    <button class="btn btn-secondary">Entrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>