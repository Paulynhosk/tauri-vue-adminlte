<script setup>
import Navbar from "../components/navigations/Navbar.vue";
import Sidebar from "../components/navigations/Sidebar.vue";
import Footer from "../components/navigations/Footer.vue";
import Header from "../components/navigations/Header.vue";

</script>
<template>
    <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
            <Header/>
            <slot/>
        </div>
        <Footer />
    </div>
</template>
<style></style>