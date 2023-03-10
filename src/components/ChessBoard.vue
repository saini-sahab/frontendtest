<script setup lang="ts">
  import { defineProps, withDefaults, computed, ref, onMounted, onBeforeUnmount, defineEmits, reactive } from 'vue';

  import { debounce } from '../utils/debounce';

  interface Props {
    size?: number, // Number of squares on each dimension of board: width x height
    maxSpace?: number, // Maximum width of the board in px
  }

  const props = withDefaults( defineProps<Props> (), {
    size: 8,
    maxSpace: 1200
  } );

  const emits = defineEmits( [ 'squareClick' ] );

  const totalSquares = computed( () => props.size * props.size );

  const boardContainer = ref<HTMLDivElement | null>( null );
  const canRender = ref( false );
  const scaleValue = ref( 1 );

  onMounted( () => {
    setBoardScale();
  } );

  /**
   * We always render the board at the maxSpace specified and then always scale it down to fit available space
   */
  function setBoardScale() {
    const BOARD_PADDING = 24; // To be used as a default case
    const availableWidth = boardContainer.value?.offsetWidth || ( window.innerWidth - BOARD_PADDING );
    const availableHeight = boardContainer.value?.offsetHeight || ( window.innerHeight - BOARD_PADDING );
    const shorterDimension = Math.min( availableWidth, availableHeight );

    scaleValue.value = Math.min( shorterDimension / props.maxSpace, 1 );

    canRender.value = true;
  }


  const boardStyles = computed( () => ( {
    width: `${props.maxSpace}px`,
    height: `${props.maxSpace}px`,
    'grid-template-rows': `repeat(${props.size}, minmax(0, 1fr))`,
    'grid-template-columns': `repeat(${props.size}, minmax(0, 1fr))`,
    transform: `scale(${scaleValue.value})`,
  } ) );
  const squareStyles = computed( () => {
    const defaultSize = `${props.maxSpace / props.size}px`;

    return {
      width: defaultSize,
      height: defaultSize,
    };
  } );

  const [ triggerBoardResize ] = debounce( () => {
    canRender.value = false;

    setTimeout( () => {
      setBoardScale();
    }, 0 );
  }, 50 );

  onMounted( () => {
    window.addEventListener( 'resize', triggerBoardResize );
  } );
  onBeforeUnmount( () => {
    window.removeEventListener( 'resize', triggerBoardResize );
  } );

  const squaresHighlighted = reactive( [] as number[] );
  const onBoardClick = ( event: Event ) => {
    const squareNum = parseInt( ( event.target as HTMLButtonElement ).dataset.nodenumber || '1', 10 );
    const row = Math.ceil( squareNum / props.size );
    let column = Math.floor( squareNum % props.size );
    column = column === 0 ? props.size : column;

    squaresHighlighted.push( squareNum );
    emits( 'squareClick', { squareNum, row, column } );
  };

</script>

<template>
  <div ref="boardContainer" class="board-inner-wrapper">
    <div v-if="canRender" class="board-container" :style="boardStyles" @click="onBoardClick">
      <button
        v-for="i in totalSquares"
        :key="i"
        class="square"
        :class="{
          'dark': ( i + Math.ceil( i / 8 ) ) % 2 === 1,
          'light': ( i - + Math.ceil( i / 8 ) ) % 2 === 0,
          'highlighted': squaresHighlighted.includes( i ),
        }"
        :style="squareStyles"
        :data-nodeNumber="i"
        type="button"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board-inner-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}

.board-container {
  display: grid;
  transform-origin: top left;
  position: absolute;
}

.square {
  border: none;
  outline: none;

  &.dark {
    background: #7fa650;

    &:hover {
      background: darken(#7fa650, 10%);
    }
  }
  &.light {
    background: #FFF;

    &:hover {
      background: darken(#FFF, 10%);
    }
  }

  &.highlighted {
    box-shadow: inset 0 0 0 6px rgba(#000, 0.55);
  }
}
</style>
