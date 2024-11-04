<script setup lang="ts">

import { componentProps, type Props } from './types';

const props = defineProps<Props>();
</script>
<template>
  <div>{{ name }}</div>
</template>
