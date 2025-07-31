<template>
<div class="col-xl-12">
    <div class="card">
        <div class="card-header card-no-border">
            <div class="header-top">
                <h5>Minhas Moedas</h5>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="recent-table table-responsive currency-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="f-light">Nome da Moeda</th>
                            <th class="f-light">Preço</th>
                            <th class="f-light">Variação 24h</th>
                            <th class="f-light">Saldo Total</th>
                            <th class="f-light">Total de Moedas</th>
                            <th class="f-light">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="currency in currencies" :key="currency">
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div :class="currency.CurremcyClass">
                                        <svg>
                                            <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${currency.svgIcon}`"></use>
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="f-14 mb-0 f-w-400">{{ currency.coinName }}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>{{ currency.price }}</td>
                            <td>
                                <div :class="currency.changeCurrency">
                                    <i class="me-1" :data-feather="currency.datafeather"></i>{{ currency.Change }}
                                </div>
                            </td>
                            <td>{{ currency.totalBalance }}</td>
                            <td>{{ currency.totalCoin }}</td>
                            <td>
                                <button class="btn badge-light-primary">Negociar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    currencies
} from "../../../data/dashboard/crypto"
export default {
    data() {
        return {
            currencies: currencies
        }
    },
}
</script>
