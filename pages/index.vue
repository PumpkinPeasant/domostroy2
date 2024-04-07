<template>
  <MainSection id="top"/>
  <BenefitsSection />
  <ProjectsSection id="projects"/>
  <MortgageSection id="mortgage" class="section"/>
  <ServicesSection id="services" class="section"/>
  <ContactsSection id="contacts" class="section"/>
</template>

<script setup>

import BenefitsSection from "~/components/index/BenefitsSection.vue";
import MainSection from "~/components/index/MainSection.vue";
import ServicesSection from "~/components/index/ServicesSection.vue";
import ProjectsSection from "~/components/index/ProjectsSection.vue";
import MortgageSection from "~/components/index/MortgageSection.vue";
import ContactsSection from "~/components/index/ContactsSection.vue";
</script>

<style scoped lang="scss">
@import "assets/scss/_variables";

.section{
  padding-top: 95px;

  @media (max-width: map-get($grid-breakpoints, md)) {
    padding-top: 90px;
  }
}
</style>