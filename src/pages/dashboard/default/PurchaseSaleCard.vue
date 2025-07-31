<template>
<div class="col-xxl-auto col-xl-3 col-sm-6 box-col-6">
    <div class="row">
        <div class="col-xl-12" v-for="puechaseSales in puechaseSalesDetails1" :key="puechaseSales">
            <div class="card widget-1" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGY4Zjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8cGF0aCBkPSJNODAgMTBDNzAgMTAgNjAgMjAgNTAgMzBDNDAgNDAgMzAgNTAgMjAgNjBDMTAgNzAgMCA4MCAwIDkwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIiAvPgogIDxwYXRoIGQ9Ik03MCAyMEM2MCAzMCA1MCA0MCA0MCA1DEMzMCA2MCAyMCA3MCAxMCA4MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIgLz4KICA8cGF0aCBkPSJNNjAgMzBDNTAgNDAgNDAgNTAgMzAgNjBDMjAgNzAgMTAgODAgMCA5MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIgLz4KPC9zdmc+'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="card-body">
                    <div class="widget-content">
                        <div :class="puechaseSales.widgetClass">
                            <div class="bg-round">
                                <svg class="svg-fill">
                                    <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${puechaseSales.svgIcon1}`"></use>
                                </svg>
                                <svg class="half-circle svg-fill">
                                    <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${puechaseSales.svgIcon2}`"></use>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4>{{ puechaseSales.number }}</h4>
                            <span class="f-light">
                                {{ puechaseSales.title }}
                            </span>
                        </div>
                    </div>
                    <div :class="puechaseSales.growthClass">
                        <i :class="puechaseSales.iconClass"></i><span>{{ puechaseSales.growthNumber }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-xxl-auto col-xl-3 col-sm-6 box-col-6">
    <div class="row">
        <div class="col-xl-12" v-for="puechaseSales in puechaseSalesDetails2" :key="puechaseSales">
            <div class="card widget-1" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOGY4Zjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8cGF0aCBkPSJNODAgMTBDNzAgMTAgNjAgMjAgNTAgMzBDNDAgNDAgMzAgNTAgMjAgNjBDMTAgNzAgMCA4MCAwIDkwIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIiAvPgogIDxwYXRoIGQ9Ik03MCAyMEM2MCAzMCA1MCA0MCA0MCA1DEMzMCA2MCAyMCA3MCAxMCA4MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIgLz4KICA8cGF0aCBkPSJNNjAgMzBDNTAgNDAgNDAgNTAgMzAgNjBDMjAgNzAgMTAgODAgMCA5MCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIgLz4KPC9zdmc+'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="card-body">
                    <div class="widget-content">
                        <div :class="puechaseSales.widgetClass">
                            <div class="bg-round">
                                <svg class="svg-fill">
                                    <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${puechaseSales.svgIcon1}`"></use>
                                </svg>
                                <svg class="half-circle svg-fill">
                                    <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${puechaseSales.svgIcon2}`"></use>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4>{{ puechaseSales.number }}</h4>
                            <span class="f-light">
                                {{ puechaseSales.title }}
                            </span>
                        </div>
                    </div>
                    <div :class="puechaseSales.growthClass">
                        <i :class="puechaseSales.iconClass"></i><span>{{ puechaseSales.growthNumber }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    puechaseSalesDetails1,
    puechaseSalesDetails2
} from "../../../data/dashboard/default"
export default {
    data() {
        return {
            puechaseSalesDetails1: puechaseSalesDetails1,
            puechaseSalesDetails2: puechaseSalesDetails2
        }
    }
}
</script>
