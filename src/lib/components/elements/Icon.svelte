<script>
  export let name = 'github';
  export let size = 16;
  export let color = 'currentColor';

  // SVG paths for each icon
  const icons = {
    github: {
      viewBox: '0 0 24 24',
      path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    'external-link': {
      viewBox: '0 0 24 24',
      path: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3',
      stroke: true
    },
    'arrow-left': {
      viewBox: '0 0 24 24',
      path: 'M19 12H5M12 19l-7-7 7-7',
      stroke: true
    },
    'arrow-right': {
      viewBox: '0 0 24 24',
      path: 'M5 12h14M12 5l7 7-7 7',
      stroke: true
    },
    'book-open': {
      viewBox: '0 0 24 24',
      path: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
      stroke: true
    },
    'file-text': {
      viewBox: '0 0 24 24',
      path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
      stroke: true
    },
    info: {
      viewBox: '0 0 24 24',
      path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01',
      stroke: true
    },
    lock: {
      viewBox: '0 0 24 24',
      path: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4',
      stroke: true
    }
  };

  $: icon = icons[name] || icons.github;
</script>

<svg
  width={size}
  height={size}
  viewBox={icon.viewBox}
  fill={icon.stroke ? 'none' : color}
  stroke={icon.stroke ? color : 'none'}
  stroke-width={icon.stroke ? 2 : 0}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-{name}"
  aria-hidden="true"
>
  <path d={icon.path} />
</svg>

<style>
  .icon {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }
</style>
