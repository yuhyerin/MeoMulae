<template>
  <div class="quiz-box">
    <v-avatar class="quiz-num" color="rgb(1,118,72)" size="50">
      <h3 style="color: white">Q2</h3>
    </v-avatar>
    <v-row class="quiz-header">
      <h2 style="margin:10px; padding:5px;">반려동물과 함께 하고 싶은 운동은?</h2>
    </v-row>
    <v-row class="quiz-img">
      <v-col class="answer-img" @click="selectedDogMbti({ idx: 1, answer: 1 }); selectedAnswer(1)" :style="answerImg1" cols="5">
        <h4 class="img-num">A.</h4><img style="margin: 10px; width: 45%;" src="@/assets/survey/Q2A.png" alt=""/>
      </v-col>
      <v-col class="answer-img" @click="selectedDogMbti({ idx: 1, answer: -1 }); selectedAnswer(2)" :style="answerImg2" cols="5"> 
        <h4 class="img-num">B.</h4><img style="margin: 10px; width: 45%" src="@/assets/survey/Q2B.png" alt=""/>
      </v-col>
    </v-row>
    <v-row class="answer" @click="selectedDogMbti({ idx: 1, answer: 1 }); selectedAnswer(1)" :style="answer1">
      <h3 style="padding: 10px;">A. 체력소모가 있는 매우 활동적인 운동</h3>
    </v-row>
    <v-row class="answer" @click="selectedDogMbti({ idx: 1, answer: -1 }); selectedAnswer(2)" :style="answer2">
      <h3 style="padding: 10px;">B. 작은 공간에서도 간단히 할 수 있는 운동</h3>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
require('@/assets/css/survey.css')

export default {
  data() {
    return {
      answerImg1: {
        border: 'hidden',
        borderRadius: '0',
      },
      answerImg2: {
        borderStyle: 'hidden',
        borderRadius: '0'
      },
      answer1: {
        color: 'black',
        backgroundColor: '#eee',
      },
      answer2: {
        color: 'black',
        backgroundColor: '#eee'
      },
    }
  },
  methods: {
    ...mapMutations(["selectedDogMbti"]),
    selectedAnswer(val) {
      if (val == 1) {
        this.answer1.color = 'white'
        this.answer1.backgroundColor = 'rgb(1, 118, 72)'
        this.answerImg1.border = 'solid rgb(1,118,72)'
        this.answerImg1.borderRadius = '5px'
        this.answer2.color = 'black'
        this.answer2.backgroundColor = '#eee'
        this.answerImg2.border = 'hidden'
        this.answerImg2.borderRadius = '0'
      }
      else if (val == 2 ) {
        this.answer2.color = 'white'
        this.answer2.backgroundColor = 'rgb(1, 118, 72)'
        this.answerImg2.border = 'solid rgb(1,118,72)'
        this.answerImg2.borderRadius = '5px'
        this.answer1.color = 'black'
        this.answer1.backgroundColor = '#eee'
        this.answerImg1.border = 'hidden'
        this.answerImg1.borderRadius = '0'
      }
    }  
  },
}
</script>

<style>
</style>