<template>
<div class="col-xl-12 col-sm-6">
    <div class="card widget-hover">
        <div class="card-body radial-progress-card">
            <div>
                <h6 class="mb-0">Lucro Médio por Dia</h6>
                <div class="sale-details">
                    <h5 class="font-secondary mb-0">89.6%</h5>
                    <span class="f-12 f-light f-w-500"><i data-feather="arrow-up"></i>+2.7%</span>
                </div>
                <p class="f-light">O objetivo de usar texto de exemplo</p>
            </div>
            <div class="radial-chart-wrap">
                <apexchart height="96.4" type="radialBar" :options="chartOptions" :series="chartSeries"></apexchart>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    cryptoDashboard
} from "../../../data/comon";
export default {
    data() {
        return {
            cryptoDashboard: cryptoDashboard,
        };
    },
    computed: {
        chartOptions() {
            return JSON.parse(JSON.stringify(this.cryptoDashboard?.options1));
        },
        chartSeries() {
            return JSON.parse(JSON.stringify(this.cryptoDashboard?.series1));
        }
    }
};
</script>
