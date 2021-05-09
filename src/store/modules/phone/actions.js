

export default {
    async loadConfig({ commit, }) {
        // const config = await this.$axios.$get('/configs/config.json');
        // if (process.env.NODE_ENV === 'production') {
        //     commit('SET_CONFIG', JSON.parse(config))
        // } else {
        //     commit('SET_CONFIG', config)
        // }
    },

    setBackground({ commit }, background) {
        commit('SET_BACKGROUND', background)
    },


    onplaySound({ state }, { sound, volume = 1, loop = true }) {
        if (!sound) {
            return;
        }

        state.soundList[sound] = new Audio(sound)
        state.soundList[sound].loop = loop;
        state.soundList[sound].volume = volume;
        state.soundList[sound].play();
    },

    onsetSoundVolume({ sound, volume = 1 }) {
        if (state.soundList[sound] !== undefined) {
            state.soundList[sound].volume = volume
        }
    },

    onstopSound({ state }, { sound }) {
        if (state.soundList[sound] !== undefined) {
            state.soundList[sound].pause()
            delete state.soundList[sound]
        }
    },
}