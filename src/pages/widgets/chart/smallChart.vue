<template>
  <div class="row">
    <div class="xl-50 col-xl-7 col-lg-12">
      <div class="small-chart-widget chart-widgets-small">
        <div class="card">
          <div class="card-header">
            <h5>Produtos ao Vivo</h5>
          </div>
          <div class="card-body">
            <div class="chart-container">
              <div class="row">
                <div class="col-12">
                  <apexchart height="320" type="line" :options="chart10.options" :series="chart10.series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl-50 col-xl-5 col-lg-12">
      <div class="card">
        <div class="card-header">
          <h5>Rotatividade</h5>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <div class="row">
              <div class="col-12">
                <apexchart height="320" type="area" :options="chart11.options" :series="chart11.series"></apexchart>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="xl-50 col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-header">
          <h5>Preços de Criptomoedas</h5>
        </div>
        <div class="card-body">
          <div class="chart-container crypto-chart">
            <div class="row">
              <div class="col-12">
                <apexchart height="320" type="area" :options="chart12.options" :series="chart12.series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl-50 col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-header">
          <h5>Anotações de Criptomoedas</h5>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <div class="row">
              <div class="col-12">
                <apexchart height="320" type="area" :options="chart13.options" :series="chart13.series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { chart } from '../../../data/comon'
export default {
  data() {
    return {
      chart10: chart.chart10,
      chart11: chart.chart11,
      chart12: chart.chart12,
      chart13: chart.chart13
    }
  }
}
</script>