<template>
    <div class="col-xxl-5 col-xl-8 box-col-12">
        <div class="row g-sm-3 height-equal-2 widget-charts">
          <div class="col-sm-6"> 
            <div class="card small-widget mb-sm-0">
              <div class="card-body primary"> <span class="f-light">Novas Licitações</span>
                <div class="d-flex align-items-end gap-1">
                  <h4>2,435</h4><span class="font-primary f-12 f-w-500"><i class="icon-arrow-up"></i><span>+50%</span></span>
                </div>
                <div class="bg-gradient"> 
                  <svg class="stroke-icon svg-fill">
                    <use href="@/assets/svg/icon-sprite.svg#new-order"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6"> 
            <div class="card small-widget mb-sm-0"> 
              <div class="card-body warning"><span class="f-light">Novos Órgãos</span>
                <div class="d-flex align-items-end gap-1">
                  <h4>2,908</h4><span class="font-warning f-12 f-w-500"><i class="icon-arrow-up"></i><span>+20%</span></span>
                </div>
                <div class="bg-gradient"> 
                  <svg class="stroke-icon svg-fill">
                    <use href="@/assets/svg/icon-sprite.svg#customers"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6"> 
            <div class="card small-widget mb-sm-0"> 
              <div class="card-body secondary"><span class="f-light">Valor Médio</span>
                <div class="d-flex align-items-end gap-1">
                  <h4>$389k</h4><span class="font-secondary f-12 f-w-500"><i class="icon-arrow-down"></i><span>-10%</span></span>
                </div>
                <div class="bg-gradient"> 
                  <svg class="stroke-icon svg-fill">
                    <use href="@/assets/svg/icon-sprite.svg#sale"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6"> 
            <div class="card small-widget mb-sm-0"> 
              <div class="card-body success"><span class="f-light">Contratos Assinados</span>
                <div class="d-flex align-items-end gap-1">
                  <h4>$3,908</h4><span class="font-success f-12 f-w-500"><i class="icon-arrow-up"></i><span>+80%</span></span>
                </div>
                <div class="bg-gradient"> 
                  <svg class="stroke-icon svg-fill">
                    <use href="@/assets/svg/icon-sprite.svg#profit"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6"> 
            <div class="card widget-1 widget-with-chart mb-xl-0" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGY4Zjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8cGF0aCBkPSJNODAgMTBDNzAgMTAgNjAgMjAgNTAgMzBDNDAgNDAgMzAgNTAgMjAgNjBDMTAgNzAgMCA4MCAwIDkwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIiAvPgogIDxwYXRoIGQ9Ik03MCAyMEM2MCAzMCA1MCA0MCA0MCA1DEMzMCA2MCAyMCA3MCAxMCA4MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIgLz4KICA8cGF0aCBkPSJNNjAgMzBDNTAgNDAgNDAgNTAgMzAgNjBDMjAgNzAgMTAgODAgMCA5MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIgLz4KPC9zdmc+'); background-size: cover; background-position: center; background-repeat: no-repeat;">
              <div class="card-body"> 
                <div> 
                  <h4 class="mb-1">156</h4><span class="f-light">Licitações</span>
                </div>
                <div class="chart-container">
                                        <apexchart height="125" type="bar" :options="chartOptions1" :series="chartSeries1"></apexchart>
                                    </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6"> 
            <div class="card widget-1 widget-with-chart mb-xl-0" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGY4Zjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8cGF0aCBkPSJNODAgMTBDNzAgMTAgNjAgMjAgNTAgMzBDNDAgNDAgMzAgNTAgMjAgNjBDMTAgNzAgMCA4MCAwIDkwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIiAvPgogIDxwYXRoIGQ9Ik03MCAyMEM2MCAzMCA1MCA0MCA0MCA1DEMzAgNjAgMjAgNzAgMTAgODAiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjIiIC8+CiAgPHBhdGggZD0iTTYwIDMwQzUwIDQwIDQwIDUwIDMwIDYwQzIwIDcwIDEwIDgwIDAgOTAiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjEiIC8+Cjwvc3ZnPg=='); background-size: cover; background-position: center; background-repeat: no-repeat;">
              <div class="card-body"> 
                <div> 
                  <h4 class="mb-1">R$ 2.5M</h4><span class="f-light">Valor Total</span>
                </div>
                <div class="profit-chart"> 
                    <apexchart height="125" type="line" :options="chartOptions2" :series="chartSeries2"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import {apexDashboard} from '../../../data/comon'
export default {

    data() {
        return {
           apexDashboard : apexDashboard,
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
};
</script>
