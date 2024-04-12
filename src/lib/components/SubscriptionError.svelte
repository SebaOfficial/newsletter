<script lang="ts">
  import { onMount } from 'svelte';

  export let error: string | null;


  import { onDestroy } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.pageX;
    mouseY = event.pageY;
  }

  function updateEyeRotation() {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach((eye: Element, _index: number, _parent: NodeListOf<Element>) => {
      const rect = (eye as HTMLElement).getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      const rad = Math.atan2(mouseX - eyeX, mouseY - eyeY);
      const rot = (rad * (180 / Math.PI) * -1) + 180;
      (eye as HTMLElement).style.transform = `rotate(${rot}deg)`;
    });
  }

  onMount(() => {
    window.addEventListener('mousemove', updateEyeRotation);
    return () => {
      window.removeEventListener('mousemove', updateEyeRotation);
    };
  });

  onDestroy(() => {
    window.removeEventListener('mousemove', updateEyeRotation);
  });
</script>


<div on:mousemove={handleMouseMove} role="none" class="wrapper">
  <p class="error-num">
    4<span>00</span>
  </p>
  <div class='eye'></div>
  <div class='eye'></div>
  <p class='sub-text'>Oh eyeballs! Something went wrong: {error}</p>
  <a href='/' data-sveltekit-reload>Go back</a>
</div>


<style lang="scss">
  .error-num {
    font-size: 8em;
    display: inline;

    span {
      display: none;
    }
  }

  .eye {
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    height: 100px;
    position: relative;
    width: 100px;

    &::after {
      background: #000;
      border-radius: 50%;
      bottom: 56.1px;
      content: '';
      height: 33px;
      position: absolute;
      right: 33px;
      width: 33px;
    }
  }

  .sub-text {
    margin-bottom: 10px;
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, .5);
    padding: 5px;
    border-radius: 5px;

    &:hover {
      color: lightgray;
    }
  }

  @media (max-width: 600px) {
    .eye {
      display: none;
    }

    .error-num {
      font-size: clamp(10px, 8vw, 150px);
      span {
        display: inline;
      }
    }
  }
</style>
