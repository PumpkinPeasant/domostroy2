<template>
  <NuxtLayout>
    <MainSection/>
    <BenefitsSection/>
    <ProjectsSection/>
    <MortgageSection/>
    <ServicesSection/>
    <ContactsSection/>
  </NuxtLayout>
</template>
<script>
import MainSection from "./components/index/MainSection.vue";
import BenefitsSection from "./components/index/BenefitsSection.vue";
import ProjectsSection from "./components/index/ProjectsSection.vue";
import MortgageSection from "./components/index/MortgageSection.vue";
import ServicesSection from "./components/index/ServicesSection.vue";
import ContactsSection from "./components/index/ContactsSection.vue";

export default {
  components: {ContactsSection, ServicesSection, MortgageSection, ProjectsSection, BenefitsSection, MainSection}
}
</script>