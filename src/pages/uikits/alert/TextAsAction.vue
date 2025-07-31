<template>
<div class="col-sm-12 col-lg-6">
    <div class="card">
        <div class="card-header">
            <h5>Texto como ação</h5><span>Use a classe <code>.action-text</code> para adicionar texto de descarte em vez de ícone</span>
        </div>
        <div class="card-body dismiss-text">
            <div class="alert alert-primary inverse alert-dismissible fade show" role="alert"><i class="icon-timer"></i>
                <p>Seu tempo acabou após <b>5</b> minutos</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-primary" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-secondary inverse alert-dismissible fade show" role="alert"><i class="icon-heart"></i>
                <p>Ops! Altere algumas coisas e envie novamente.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-secondary" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-success inverse alert-dismissible fade show" role="alert"><i class="icon-thumb-up alert-center"></i>
                <p><b> Muito bem! </b>Você leu com sucesso esta mensagem importante.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-success" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-info inverse alert-dismissible fade show" role="alert"><i class="icon-help-alt"></i>
                <p><b>Bem-vindo!</b> Comece seu dia com alguns alertas.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-info" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-warning inverse alert-dismissible fade show" role="alert"><i class="icon-bell"></i>
                <p><b> Parabéns! </b>Seu Produto foi Adicionado na Lista de Favoritos</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-warning" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-danger inverse alert-dismissible fade show" role="alert"><i class="icon-thumb-down"></i>
                <p>Sua <b> Performance </b> caiu nesta semana</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-danger" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-light inverse alert-dismissible fade show" role="alert"><i class="icon-alert txt-dark"></i>
                <p>Você pode verificar alguns desses campos abaixo.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-light txt-dark" aria-hidden="true">descartar</span></button>
            </div>
            <div class="alert alert-dark inverse alert-dismissible fade show" role="alert"><i class="icon-info-alt"></i>
                <p>Você pode verificar alguns desses campos abaixo.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"><span class="bg-light txt-dark" aria-hidden="true">descartar</span></button>
            </div>
        </div>
    </div>
</div>
</template>
