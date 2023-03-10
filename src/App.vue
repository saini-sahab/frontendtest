<script setup lang="ts">
import { reactive } from 'vue';

import ChessBoard from './components/ChessBoard.vue';

const clickHistory: Array<[Number, number]> = reactive( [] );

function onSquareClick( { squareNum, row, column }: { squareNum: number, row: number, column: number } ) {
  clickHistory.push( [ row, column ] );
}

</script>

<template>
  <div class="app">
    <div class="board-wrapper">
      <ChessBoard @squareClick="onSquareClick" />
    </div>

    <div class="sidebar-container">
      <h6>Click History</h6>
      <p v-for="( square, index ) in clickHistory" :key="index" class="move">
        {{ index + 1 }} - {{ square[0] }} x {{ square[1] }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
}

.board-wrapper {
  flex: 1;
  padding: 24px;
}

.sidebar-container {
  height: 88px;
  width: 100%;
  background: rgba(#FFF, 0.8);
  display: flex;
  gap: 4px 12px;
  color: #000;
  overflow: auto;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 4px;
  font-weight: bold;

  h6 {
    display: none;
    text-align: center;
  }

  @media screen and (min-width: 576px) {
    width: 88px;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4px 4px;

    h6 {
      display: block;
    }
  }
}
</style>
