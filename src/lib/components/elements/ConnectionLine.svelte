<script>
  export let x1 = 0;
  export let y1 = 0;
  export let x2 = 100;
  export let y2 = 100;
  export let dashed = false;
  export let animated = false;
  export let color = 'var(--color-slate)';
  export let opacity = 1;
</script>

<svg class="connection-line" style="opacity: {opacity};">
  <line
    {x1}
    {y1}
    {x2}
    {y2}
    stroke={color}
    stroke-width="2"
    stroke-dasharray={dashed ? '6 4' : 'none'}
    class:animated
  />
</svg>

<style>
  .connection-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: visible;
  }

  line.animated {
    stroke-dasharray: 6 4;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: -20;
    }
  }
</style>
