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

<style scoped>
.section{
  padding-top: 95px;
}
</style>