<template>
  <div id="Moodle">
    <mobile-tear-sheet>
      <mu-list>
        <mu-sub-header inset>Moodle 課程列表</mu-sub-header>
        <template v-for="(update,index) in updates">
          <mu-list-item :title="update.name"
                        :describeText="update.activity+' activities'" @click.native="openLink(update.link)">
            <mu-avatar v-if="update.activity>0" 
                      icon="assignment"
                      backgroundColor="blue"
                      slot="leftAvatar" />
            <mu-avatar v-else
                      icon="insert_chart"
                      backgroundColor="yellow600"
                      slot="leftAvatar" />
            <mu-icon value="info"
                    slot="right" />
          </mu-list-item>
          <!--<mu-divider v-if="(index+1)!=updates.length" />-->
        </template>
      </mu-list>
    </mobile-tear-sheet>
  </div>
</template>

<script>
import apiClient from '../modal/apiClient'

export default {
  data() {
    return {
      updates: [],
    };
  },
  mounted() {
    apiClient.getMoodleList()
      .then((response) => {
        this.updates = response.data.map((update) => {
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
  methods: {
    openLink(link) {
      window.open(link);
    }
  }
};

</script>

<style scoped>

</style>
