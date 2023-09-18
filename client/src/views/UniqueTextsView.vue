<template>
  <h1>unique characters</h1>

  <section class="baseContainer">
    <form class="formContainer">
      <textarea id="" cols="30" rows="10" v-model="form.userInputTexts"></textarea>

      <button class="btnTxt" v-on:click="handleText">Submit</button>
    </form>
    <article class="articleValue">
      <div v-if="uniqueSets.length < 1">there are no unique characters yet.</div>
      <div v-for="uniqueNum in uniqueSets">
        {{ uniqueNum }}
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'UniqueTextsView',
  data() {
    return {
      form: {
        userInputTexts: ''
      },
      uniqueSets: []
    }
  },
  methods: {
    handleText(e) {
      e.preventDefault()

      let unique = this.form.userInputTexts

      const castToArray = unique.split('\n')
      const uniqueNumbers = new Set(castToArray)

      this.uniqueSets = uniqueNumbers
      console.log(uniqueNumbers)
    }
  }
}
</script>

<style scoped>
.baseContainer {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 2rem;
}

.formContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.formContainer textarea {
  background-color: transparent;
  color: #f8f8f8;
  border-radius: 5px;
  padding: 0.5rem;
  min-width: 200px;
  min-height: 200px;
}

.btnTxt {
  background-color: transparent;
  color: #f8f8f8;
  padding: 0.3rem;
  border-radius: 5px;
}

.articleValue {
  border: 2px solid #f8f8f8;
  border-radius: 5px;
  padding: 0.5rem;
  min-width: 200px;
  min-height: 200px;
  height: 100%;
}
</style>
