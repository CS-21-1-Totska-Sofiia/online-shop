<script setup>
    const route = useRoute();
</script>

<template>
    <p>{{ route.params.id }}</p>
</template>
