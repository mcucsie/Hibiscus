<template>
  <div class="container">
    <md-list class="md-double-line">
      <md-list-item v-for="update in updates" :key="update.name">
        <md-icon class="md-accent" v-if="update.review">alarm</md-icon>
        <md-icon class="md-primary" v-else>label</md-icon>

        <div class="md-list-text-container">
          <span>{{ update.name }}</span>
          <span>{{ update.activity }} activities</span>
        </div>

        <md-button class="md-icon-button md-list-action" :href="update.link" target="_blank">
          <md-icon>send</md-icon>
        </md-button>

      </md-list-item>
    </md-list>
  </div>
</template>

<style>
  .container {
    margin: 0 auto;
    max-width: 1280px;
    width: 90%
  }
  
  @media only screen and (min-width: 601px) {
    .container {
      width: 85%;
    }
  }
  
  @media only screen and (min-width: 993px) {
    .container {
      width: 70%;
    }
  }
</style>

<script>
  import axios from 'axios';

  const url = '/static/moodle.json';

  export default {
    data() {
      return {
        updates: [],
      };
    },
    mounted() {
      axios.get(url)
        .then(response => response.data)
        .then((data) => {
          this.updates = data.map((update) => {
            const review = update.activities.assignments.find(assignment => assignment.needsReview);
            const activity = update.activities.assignments.length + update.activities.forums.length;
            return {
              activity,
              review,
              name: update.name,
              link: update.link,
            };
          });
        })
        .catch(console.trace);
    },
  };

</script>