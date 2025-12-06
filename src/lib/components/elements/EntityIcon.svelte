<script>
  export let type = 'person'; // person, place, time, relation
  export let size = 40;

  const icons = {
    person: {
      color: '#BF5B3E',
      path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    },
    place: {
      color: '#4CAF50',
      path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
    },
    time: {
      color: '#FF9800',
      path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
    },
    relation: {
      color: '#607D8B',
      path: 'M4 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm12 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM8 12h8',
    },
  };

  $: icon = icons[type] || icons.person;
</script>

<div
  class="entity-icon"
  style="width: {size}px; height: {size}px;"
  role="img"
  aria-label="{type}"
>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={icon.path}
      stroke={icon.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
  </svg>
</div>

<style>
  .entity-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100%;
    height: 100%;
  }
</style>
