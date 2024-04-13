<script lang="ts">
  import Background from '$lib/components/Background.svelte';
</script>

<main>
  <div class="wrapper">
    <slot />
  </div>
</main>

<div class="bg">
  <Background />
</div>

<style lang="scss">
  main {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    text-align: center;

    .wrapper {
      margin: 20px;
      min-width: 50%;
      min-height: 50%;
      padding: 20px;
      border-radius: 20px;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10%;
    }
  }

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>

{#if process.env.NODE_ENV === 'production'}
  <!-- Cloudflare Web Analytics -->
  <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon={'{"token": "db63fe38f3574073b60b89024c306d25"}'}></script>
  <!-- End Cloudflare Web Analytics -->
{/if}
