<template>
<div class="col-xxl-auto col-xl-12 col-sm-6 box-col-6">
    <div class="row">
        <div class="col-xxl-12 col-xl-6 box-col-12">
            <div class="card widget-1 widget-with-chart" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGY4Zjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8cGF0aCBkPSJNODAgMTBDNzAgMTAgNjAgMjAgNTAgMzBDNDAgNDAgMzAgNTAgMjAgNjBDMTAgNzAgMCA4MCAwIDkwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIiAvPgogIDxwYXRoIGQ9Ik03MCAyMEM2MCAzMCA1MCA0MCA0MCA1MEMzMCA2MCAyMCA3MCAxMCA4MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIgLz4KICA8cGF0aCBkPSJNNjAgMzBDNTAgNDAgNDAgNTAgMzAgNjBDMjAgNzAgMTAgODAgMCA5MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIgLz4KPC9zdmc+'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="card-body">
                    <div>
                        <h4 class="mb-1">156</h4>
                        <span class="f-light">Licitações</span>
                    </div>
                    <div class="order-chart">
                        <apexchart height="125" width="200" type="bar" :options="chartOptions1" :series="chartSeries1"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-12 col-xl-6 box-col-12">
            <div class="card widget-1 widget-with-chart" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGY4Zjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8cGF0aCBkPSJNODAgMTBDNzAgMTAgNjAgMjAgNTAgMzBDNDAgNDAgMzAgNTAgMjAgNjBDMTAgNzAgMCA4MCAwIDkwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIiAvPgogIDxwYXRoIGQ9Ik03MCAyMEM2MCAzMCA1MCA0MCA0MCA1DEMzMCA2MCAyMCA3MCAxMCA4MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIgLz4KICA8cGF0aCBkPSJNNjAgMzBDNTAgNDAgNDAgNTAgMzAgNjBDMjAgNzAgMTAgODAgMCA5MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIgLz4KPC9zdmc+'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="card-body">
                    <div>
                        <h4 class="mb-1">R$ 2.5M</h4>
                        <span class="f-light">Valor Total</span>
                    </div>
                    <div class="profit-chart">
                        <apexchart height="146" type="line" :options="chartOptions2" :series="chartSeries2"></apexchart>
                    </div>
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
export default {
    data() {
        return {
            apexDashboard: apexDashboard,
        };
    },
    computed: {
        chartOptions1() {
            return JSON.parse(JSON.stringify(this.apexDashboard.options));
        },
        chartSeries1() {
            return JSON.parse(JSON.stringify(this.apexDashboard.series));
        },
        chartOptions2() {
            return JSON.parse(JSON.stringify(this.apexDashboard.options2));
        },
        chartSeries2() {
            return JSON.parse(JSON.stringify(this.apexDashboard.series2));
        }
    }
}
</script>
