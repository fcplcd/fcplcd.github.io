---
# Redirects to the most recent iteration of the lecture, see config.mts.
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useData, withBase } from 'vitepress'

const { theme } = useData()
const target = withBase(`/${theme.value.latestYear}/`)
onMounted(() => window.location.replace(target))
</script>

Redirecting to the <a :href="target">current semester</a>…
