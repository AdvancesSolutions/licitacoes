<template>
<div class="col-xl-12 col-sm-6">
    <div class="card widget-hover">
        <div class="card-body radial-progress-card">
            <div>
                <h6 class="mb-0">Visitas Médias por Dia</h6>
                <div class="sale-details">
                    <h5 class="font-success mb-0">70k</h5>
                    <span class="f-12 f-light f-w-500"><i data-feather="arrow-up"></i>+1.5%</span>
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
            return JSON.parse(JSON.stringify(this.cryptoDashboard?.options2));
        },
        chartSeries() {
            return JSON.parse(JSON.stringify(this.cryptoDashboard?.series2));
        }
    }
};
</script>
