<template>
    <div class="col-xxl-4 col-md-6 box-col-6">
        <div class="card">
            <div class="card-header card-no-border">
                <div class="header-top">
                    <h5 class="m-0">Cronograma</h5>
                    <div class="card-header-right-icon">
                        <DropDown2 />
                    </div>
                </div>
            </div>
            <div class="card-body pt-0">
                <div class="schedule-container">


                    <apexchart height="355" type="bar" :options="chartOptions" :series="chartSeries">
                    </apexchart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown2 from "../base/dropdown/DropDown2.vue";
import {
    apexDashboard
} from "../../../data/comon";
export default {
    components: {
        DropDown2
    },
    data() {
        return {
            apexDashboard: apexDashboard,
        };
    },
    computed: {
        chartOptions() {
            return JSON.parse(JSON.stringify(this.apexDashboard.options5));
        },
        chartSeries() {
            return JSON.parse(JSON.stringify(this.apexDashboard.series5));
        }
    }
}
</script>
