<script setup lang="ts">
import { ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes } from 'vue';
import { componentProps } from './types';
export type ParentProps = ExtractPublicPropTypes<typeof componentProps>;
defineProps<ParentProps>();
</script>
<template>
  <div>{{ name }}</div>
</template>