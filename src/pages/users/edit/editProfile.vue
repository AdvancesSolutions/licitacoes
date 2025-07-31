<template>
    <div class="col-xl-8">
        <form class="card">
            <div class="card-header ">
                <h4 class="card-title mb-0">Editar Perfil</h4>
                <div class="card-options"><a class="card-options-collapse" href="javascript:void(0)"
                        data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove"
                        href="javascript:void(0)" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">Empresa</label>
                            <input class="form-control" type="text" placeholder="Empresa">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Nome de Usuário</label>
                            <input class="form-control" type="text" placeholder="Nome de Usuário">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Endereço de Email</label>
                            <input class="form-control" type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Primeiro Nome</label>
                            <input class="form-control" type="text" placeholder="Primeiro Nome">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Sobrenome</label>
                            <input class="form-control" type="text" placeholder="Sobrenome">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Endereço</label>
                            <input class="form-control" type="text" placeholder="Endereço Residencial">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mb-3">
                            <label class="form-label">Cidade</label>
                            <input class="form-control" type="text" placeholder="Cidade">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Código Postal</label>
                            <input class="form-control" type="number" placeholder="Código Postal">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="mb-3">
                            <label class="form-label">País</label>
                            <select class="form-control btn-square">
                                <option value="0">--Selecionar--</option>
                                <option value="1">Germany</option>
                                <option value="2">Canada</option>
                                <option value="3">Usa</option>
                                <option value="4">Aus</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div>
                            <label class="form-label">Sobre Mim</label>
                            <textarea class="form-control" rows="5" placeholder="Digite sua descrição"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-primary" type="submit">Atualizar Perfil</button>
            </div>
        </form>
</div>
</template>