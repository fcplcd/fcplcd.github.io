<script setup lang="ts">
import biLogo from './bi-logo-white.svg'

const ccIcons = ['cc', 'by', 'nc', 'sa']
</script>

<template>
  <!-- z-index sits above the fixed desktop sidebar (25) but below the mobile sidebar drawer (60) -->
  <footer class="license-footer relative z-26 w-full bg-(--bi-blue) text-sm leading-6 text-white">
    <div class="mx-auto max-w-6xl px-6 py-6 text-center md:px-8">
      <a href="https://pages.barkhauseninstitut.org/versa/fcplcd-2026">FCPLCD Exercise</a>
      © 2026 by
      <a href="https://www.barkhauseninstitut.org">Barkhausen Institut</a>
      <img :src="biLogo" alt="" class="bi-logo"/>
      is licensed under
      <span class="inline-flex items-center gap-1 align-middle">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="mr-1">CC BY-NC-SA 4.0</a>
        <img
          v-for="icon in ccIcons"
          :key="icon"
          :src="`https://mirrors.creativecommons.org/presskit/icons/${icon}.svg`"
          :alt="icon.toUpperCase()"
          class="cc-icon"
          width="18"
          height="18"
        />
      </span>
    </div>
  </footer>
</template>

<style scoped>
/* Same look as the home page's title band: white on BI blue. */
.license-footer a {
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.license-footer a:hover {
  text-decoration-thickness: 2px;
}

/*
 * The Creative Commons icons are black on white. Invert them and screen-blend
 * so the (now black) background drops out and the symbols show white on blue.
 */
.license-footer .cc-icon {
  filter: invert(1);
  mix-blend-mode: screen;
}

/* Small BI mark after the institute's name, about the text's cap height. */
.license-footer .bi-logo {
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 0 0.15em 0 0.3em;
  vertical-align: center;
}
</style>
