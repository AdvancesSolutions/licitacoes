<template>
    <div class="col-xl-3 col-sm-6"> 
        <div class="card social-widget">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-2">
                <div class="social-icons"><img src="@/assets/images/dashboard-5/social/3.png" alt="twitter icon"></div><span>Twitter</span>
              </div><span class="font-success f-12 d-xxl-block d-xl-none">+14.09%</span>
            </div>
            <div class="social-content">
              <div> 
                <h5 class="mb-1">12,564</h5><span class="f-light">Followers</span>
              </div>
              <div class="social-chart">
                <apexchart height="96.4" type="radialBar" :options="chartOptions1" :series="chartSeries1"></apexchart>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6"> 
        <div class="card social-widget">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-2">
                <div class="social-icons"><img src="@/assets/images/dashboard-5/social/2.png" alt="instagram icon"></div><span>Instagram</span>
              </div><span class="font-success f-12 d-xxl-block d-xl-none">+27.4%</span>
            </div>
            <div class="social-content">
              <div> 
                <h5 class="mb-1">15,080</h5><span class="f-light">Followers</span>
              </div>
              <div class="social-chart">
                <apexchart height="96.4" type="radialBar" :options="chartOptions2" :series="chartSeries2"></apexchart>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6"> 
        <div class="card social-widget">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-2">
                <div class="social-icons"><img src="@/assets/images/dashboard-5/social/4.png" alt="you tube icon"></div><span>Youtube</span>
              </div><span class="font-success f-12 d-xxl-block d-xl-none">+22.9%</span>
            </div>
            <div class="social-content">
              <div> 
                <h5 class="mb-1">68,954</h5><span class="f-light">Followers</span>
              </div>
              <div class="social-chart">
                <apexchart height="96.4" type="radialBar" :options="chartOptions3" :series="chartSeries3"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import {socialDashboard} from '../../../data/comon'

export default {
    data() {
        return {
       socialDashboard: socialDashboard
        }
    },
    computed: {
        chartOptions1() {
            return JSON.parse(JSON.stringify(this.socialDashboard.options2));
        },
        chartSeries1() {
            return JSON.parse(JSON.stringify(this.socialDashboard.series2));
        },
        chartOptions2() {
            return JSON.parse(JSON.stringify(this.socialDashboard.options1));
        },
        chartSeries2() {
            return JSON.parse(JSON.stringify(this.socialDashboard.series1));
        },
        chartOptions3() {
            return JSON.parse(JSON.stringify(this.socialDashboard.options8));
        },
        chartSeries3() {
            return JSON.parse(JSON.stringify(this.socialDashboard.series8));
        }
    }
}
</script>