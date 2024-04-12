<script>
	import { fly } from "svelte/transition";
</script>

<div class="container">
  <div class="thank-you">
    <img src="/thank-you-envelope.png" alt="thank-you-envelope" transition:fly>
    <h2>Thank you!</h2>
  </div>

  <div class="description">
    <p>Expect your first newsletter shortly.</p>
    <p>In the meantime you might like to view the latest posts on <a href="https://blog.racca.me" target="_blank" rel="noopener">my blog</a></p>
  </div>
</div>


<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .thank-you {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: space-evenly;

      h2 {
        font-size: xx-large;
      }

      img {
        width: 100px;
      }
    }

    .description {
      a {
        color: rgb(121, 121, 255);
        text-decoration: none;
        transition: .5s color;

        &:hover {
          color: #e7378f;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      .thank-you {
        img {
          display: none;
        }
      }
    }
  }
</style>
