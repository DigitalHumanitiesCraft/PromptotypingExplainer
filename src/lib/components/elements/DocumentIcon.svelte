<script>
  export let type = 'xml'; // xml, pdf, csv, md, notes
  export let size = 48;

  const icons = {
    xml: {
      color: '#607D8B',
      symbol: '</>',
    },
    pdf: {
      color: '#E53935',
      symbol: 'PDF',
    },
    csv: {
      color: '#4CAF50',
      symbol: '|||',
    },
    notes: {
      color: '#FF9800',
      symbol: '≡',
    },
    md: {
      color: '#1A1A1A',
      symbol: 'MD',
    },
  };

  $: icon = icons[type] || icons.xml;
</script>

<div
  class="document-icon"
  style="width: {size}px; height: {size * 1.3}px;"
  role="img"
  aria-label="{type.toUpperCase()} Dokument"
>
  <svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Document shape with folded corner -->
    <path
      d="M2 4C2 2.89543 2.89543 2 4 2H26L38 14V48C38 49.1046 37.1046 50 36 50H4C2.89543 50 2 49.1046 2 48V4Z"
      fill="white"
      stroke={icon.color}
      stroke-width="2"
    />
    <!-- Folded corner -->
    <path
      d="M26 2V12C26 13.1046 26.8954 14 28 14H38"
      stroke={icon.color}
      stroke-width="2"
    />
    <!-- Type indicator -->
    <text
      x="20"
      y="36"
      text-anchor="middle"
      font-size="10"
      font-weight="600"
      font-family="var(--font-mono)"
      fill={icon.color}
    >
      {icon.symbol}
    </text>
  </svg>
</div>

<style>
  .document-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100%;
    height: 100%;
  }
</style>
