<template>
  <!-- Player -->
  <div
    class="fixed flex flex-col bottom-0 left-0 bg-white px-5 py-2 text-left align-top w-full "
  >
    <!-- song name -->
    <div
      class=" lg:text-lg text-sm text-center mx-auto
         truncate overflow-hidden w-1/2 mt-2 mb-1 lg:mb-0"
      v-if="currentSong.modified_name"
    >
      <div
        class="relative lg:animate-none"
        :class="{ truncate: !playing, 'animate-slide-left': playing }"
      >
        <span class="song-title"> {{ currentSong.modified_name }}</span>
        <span class="song-artist">
          (Uploaded by {{ currentSong.display_name }})
        </span>
      </div>
    </div>
    <!-- player-row -->
    <div class="my-2">
      <div class="relative flex items-center">
        <!-- Play/Pause Button -->
        <div class="float-left">
          <button
            type="button"
            @click.prevent="toggleAudio"
            id="player-play-button"
          >
            <i
              class="fa text-gray-500 text-xl"
              :class="{ 'fa-play': !playing, 'fa-pause': playing }"
            ></i>
          </button>
        </div>
        <!-- Current Position -->
        <div class="leading-3 max-w-min text-gray-400  text-sm lg:text-lg mx-4">
          <span class="player-currenttime">{{ seek }}</span>
        </div>
        <!-- Scrub -->
        <div
          class="flex-grow float-left
        leading-3"
        >
          <!-- Scrub Container  -->
          <span
            class="block w-full  rounded  bg-gray-200 relative cursor-pointer"
            @click.prevent="updateSeek"
          >
            <!-- Player Ball -->
            <span
              class="absolute -top-2.5 left-2 text-gray-800 text-lg"
              :style="{ left: playerProgress }"
            >
              <i class="fas fa-circle"></i>
            </span>
            <!-- Player Progres Bar -->
            <span
              class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
              :style="{ width: playerProgress }"
            ></span>
          </span>
        </div>
        <!-- Duration -->
        <div class="leading-3 max-w-min text-gray-400  text-sm lg:text-lg mx-4">
          <span class="player-duration">{{ duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Player',
  computed: {
    ...mapGetters(['playing']),
    ...mapState({
      seek: (state) => state.player.seek,
      duration: (state) => state.player.duration,
      playerProgress: (state) => state.player.playerProgress,
      currentSong: (state) => state.player.currentSong,
    }),
  },
  methods: {
    ...mapActions(['toggleAudio', 'updateSeek']),
  },

};
</script>
