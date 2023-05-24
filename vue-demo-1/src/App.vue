<template>
  <div class="wrapper">
    <h1>井字棋游戏</h1>
    <div class="row">
      <Cell @click="onClickCell(0, $event)" :n="n" />
      <Cell @click="onClickCell(1, $event)" :n="n" />
      <Cell @click="onClickCell(2, $event)" :n="n" />
    </div>
    <div class="row">
      <Cell @click="onClickCell(3, $event)" :n="n" />
      <Cell @click="onClickCell(4, $event)" :n="n" />
      <Cell @click="onClickCell(5, $event)" :n="n" />
    </div>
    <div class="row">
      <Cell @click="onClickCell(6, $event)" :n="n" />
      <Cell @click="onClickCell(7, $event)" :n="n" />
      <Cell @click="onClickCell(8, $event)" :n="n" />
    </div>
    <div class="result">{{ result ? `胜利者为：${result}` : '胜负未分' }}</div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'
export default {
  data() {
    return {
      n: 0,
      map: [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]],
      result: undefined
    }
  },
  components: { Cell },
  methods: {
    onClickCell(i, text) {
      console.log(i)
      this.n += 1
      this.map[Math.floor(i / 3)][i % 3] = text
      this.tell()
    },
    tell() {
      const map = this.map;
      for (let i = 0; i < 3; i++) {
        if (map[i][0] && map[i][0] === map[i][1] && map[i][1] === map[i][2]) { this.result = map[i][0]; return }
        if (map[0][i] && map[0][i] === map[1][i] && map[1][i] === map[2][i]) { this.result = map[0][i]; return }
      }
      if (map[0][0] && map[0][0] === map[1][1] && map[1][1] === map[2][2]) { this.result = map[0][0]; return }
      if (map[0][2] && map[0][2] === map[1][1] && map[1][1] === map[2][0]) { this.result = map[0][2]; return }
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
}

.row>div {
  margin-left: -1px;
  margin-bottom: -1px;
}

.result {
  margin-top: 10px;
}
</style>
