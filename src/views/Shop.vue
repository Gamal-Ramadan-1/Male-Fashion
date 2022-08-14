<template>
  <BreadcrumbOption />
  <ShopContent />
</template>
<script>
import BreadcrumbOption from "@/components/BreadcrumbOptionShopPage/BreadcrumbOption.vue";
import ShopContent from "@/components/ShopContent/ShopContent.vue";
export default {
  name: "Shop",
  components: { BreadcrumbOption, ShopContent },
};
</script>