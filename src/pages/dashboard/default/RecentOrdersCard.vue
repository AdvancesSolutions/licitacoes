<template>
<div class="col-xxl-4 col-xl-7 col-md-6 col-sm-5 box-col-6">
    <div class="card height-equal">
        <div class="card-header card-no-border">
            <div class="header-top">
                <h5>Licitações Recentes</h5>
                <div class="card-header-right-icon">
                    <DropDown3 />
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="row recent-wrapper">
                <div class="col-xl-6">
                    <div class="recent-chart">
                        <apexchart height="290.7" type="radialBar" :options="chartOptions" :series="chartSeries"></apexchart>
                    </div>
                </div>
                <div class="col-xl-6">
                    <ul class="order-content">
                        <li v-for="item in items" :key="item">
                            <span :class="item.class"> </span>
                            <div>
                                <span class="f-light f-w-500">{{ item.status }}</span>
                                <h4 class="mt-1 mb-0">
                                    {{ item.orders
                    }}<span class="f-light f-14 f-w-400 ms-1">({{ item.orderperiod }})
                                    </span>
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    apexDashboard
} from "../../../data/comon";
import DropDown3 from '../base/dropdown/DropDown3.vue';
export default {
    components: {
        DropDown3
    },
    data() {
        return {
            apexDashboard: apexDashboard,
            items: [                {
                    status: "Em Andamento",
                    orders: "45",
                    orderperiod: "Últimos 6 meses",
                    class: "recent-circle bg-primary",
                },
                {
                    status: "Homologadas",
                    orders: "23",
                    orderperiod: "Últimos 6 meses",
                    class: "recent-circle bg-info",
                },
            ],
        };
    },
    computed: {
        chartOptions() {
            return JSON.parse(JSON.stringify(this.apexDashboard.options4));
        },
        chartSeries() {
            return JSON.parse(JSON.stringify(this.apexDashboard.series4));
        }
    }
};
</script>
