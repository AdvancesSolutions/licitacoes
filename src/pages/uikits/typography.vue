<template>
    <div>
        <Breadcrumbs main="Kits de UI" title="Tipografia" />

        <div class="container-fluid">
            <div class="row">
                <Headings />
                <Thin />
                <Normal />
                <Bold />
                <Fancydisplay />
                <ListingCom />
                <Blockquotes />
            </div>
        </div>

    </div>
</template>

<script>
import Headings from "./typographyComponent/Headings.vue"
import Thin from "./typographyComponent/Thin.vue"
import Normal from "./typographyComponent/Normal.vue"
import Bold from "./typographyComponent/Blod.vue"
import Fancydisplay from "./typographyComponent/Fancydisplay.vue"
import ListingCom from "./typographyComponent/Listing.vue"
import Blockquotes from "./typographyComponent/Blockquotes.vue"
export default {
    components: {
        Headings,
        Thin,
        Normal,
        Bold,
        Fancydisplay,
        ListingCom,
        Blockquotes

    }
};
</script>
