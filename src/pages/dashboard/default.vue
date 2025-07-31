<template>
    <div>
        <Breadcrumbs main="Dashboard" title="principal" />

        <div class="container-fluid">
            <div class="row widget-grid">
                <WelcomeCard />
                <PurchaseSaleCard />
                <OrdersProfitCard />
                <OverallBalanceCard />
                <RecentOrdersCard />
                <ActivitiesCard />
                <RecentSalesCard />
                <TimelineCard />
                <ProAccountCard />
                <TotalUsersGrowthCard />
                <PaperNoteCard />
                <LicitacoesWidget />
            </div>
        </div>

    </div>
</template>

<script>
import WelcomeCard from "./default/WelcomeCard.vue";
import PurchaseSaleCard from "./default/PurchaseSaleCard.vue";
import OrdersProfitCard from "./default/OrdersProfitCard.vue";
import OverallBalanceCard from "./default/OverallBalanceCard.vue";
import RecentOrdersCard from "./default/RecentOrdersCard.vue";
import ActivitiesCard from "./default/ActivitiesCard.vue";
import RecentSalesCard from "./default/RecentSalesCard.vue";
import TimelineCard from "./default/TimelineCard.vue";
import ProAccountCard from "./default/ProAccountCard.vue";
import TotalUsersGrowthCard from "./default/TotalUsersGrowthCard.vue";
import PaperNoteCard from "./default/PaperNoteCard.vue";
import LicitacoesWidget from "./default/LicitacoesWidget.vue";

export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
        OrdersProfitCard,
        OverallBalanceCard,
        RecentOrdersCard,
        ActivitiesCard,
        RecentSalesCard,
        TimelineCard,
        ProAccountCard,
        TotalUsersGrowthCard,
        PaperNoteCard,
        LicitacoesWidget,
    },
};
</script>
