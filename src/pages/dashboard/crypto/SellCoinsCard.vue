<template>
<div class="col-sm-6">
    <div class="card">
        <div class="card-header card-no-border">
            <div class="header-top gap-1">
                <h5>Vender Moedas</h5>
                <div class="dropdown icon-dropdown">
                    <button class="btn dropdown-toggle" id="selldropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="icon-more-alt"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="selldropdown">
                        <a class="dropdown-item" href="#">Semanal</a><a class="dropdown-item" href="#">Mensal</a><a class="dropdown-item" href="#">Anual</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <form class="theme-form crypto-form">
                <div class="mb-3">
                    <label class="form-label f-light" for="crypto-coin">Digite Moedas Cripto</label>
                    <div class="position-relative">
                        <input class="form-control" id="crypto-coin" type="number" placeholder="100" />
                        <select class="form-select crypto-select warning">
                            <option>USD</option>
                            <option>BTC</option>
                            <option>LTC</option>
                            <option>ETH</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label f-light" for="bitcoin">Digite Dinheiro Convertido para</label>
                    <div class="position-relative">
                        <input class="form-control" id="bitcoin" type="number" placeholder="0.0043" />
                        <select class="form-select crypto-select primary">
                            <option>LTC</option>
                            <option>USD</option>
                            <option>BTC</option>
                            <option>ETH</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary btn-hover-effect w-100" type="button">
                    Vender Moedas
                </button>
            </form>
        </div>
    </div>
</div>
</template>
